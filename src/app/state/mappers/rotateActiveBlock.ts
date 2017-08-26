import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {BlockType} from '../../enums/blockType.enum';
import {BlockOrientation} from '../../enums/blockOrientation.enum';
import {ICell} from '../../interfaces/cell.interface';


export function rotateActiveBlockMapper(state: ITetrisState, action: Action): ITetrisState {

	let {activeBlock} = state;
	const {unclearedCells, numCols, numRows} = state;
	const {unrotatedCells, type, orientation} = activeBlock;

	let newOrientation: BlockOrientation;
	let angle: number;

	// Determine the angle to rotate by and the new orientation
	switch (orientation) {
		case BlockOrientation.Normal:
			newOrientation = BlockOrientation.FlippedLeft;
			angle = -0.5 * Math.PI;
			break;
		case BlockOrientation.FlippedLeft:
			newOrientation = BlockOrientation.UpsideDown;
			angle = -1 * Math.PI;
			break;
		case BlockOrientation.UpsideDown:
			newOrientation = BlockOrientation.FlippedRight;
			angle = -1.5 * Math.PI;
			break;
		case BlockOrientation.FlippedRight:
			newOrientation = BlockOrientation.Normal;
			angle = -2 * Math.PI;
			break;
		default:
			newOrientation = orientation;
			angle = 0;
			break;
	}

	// Do not perform rotation for square - unnecessary.
	if (type === BlockType.Square) {
		return {...state, activeBlock: {...activeBlock, orientation: newOrientation}};
	}

	let centroid: number[];

	switch (type) {
		case BlockType.Long:
			centroid = [unrotatedCells[1].row + 0.5, unrotatedCells[1].column];
			break;
		case BlockType.ZigZag:
		case BlockType.ReverseZigZag:
			centroid = [unrotatedCells[1].row, unrotatedCells[1].column + 0.5];
			break;
		case BlockType.Pyramid:
		case BlockType.L:
		case BlockType.ReverseL:
		default:
			centroid = [unrotatedCells[1].row, unrotatedCells[1].column];
			break;
	}

	// Now do the rotation
	const cosAngle = Math.cos(angle);
	const sinAngle = Math.sin(angle);

	let cells: ICell[] = unrotatedCells.map(cell => {
		const translatedRow = cell.row - centroid[0];
		const translatedCol = cell.column - centroid[1];
		// use a rounding trick to avoid tiny rounding errors causing incorrect positions
		const row = Math.ceil(0.5 * Math.round(2 * (centroid[0] + cosAngle * translatedRow - sinAngle * translatedCol)));
		const column = Math.floor(0.5 * Math.round(2 * (centroid[1] + sinAngle * translatedRow + cosAngle * translatedCol)));
		return {type, row, column};
	});

	// make sure rotated block not outside bounds
	const cols = cells.map(cell => cell.column);
	const minCol = Math.min(...cols);
	const maxCol = Math.max(...cols);

	if (minCol < 0) {
		// move block to the right
		cells = cells.map(cell => ({...cell, column: cell.column - minCol}));
	}  else if (maxCol >= numCols) {
		// move block to the left
		const offset = numCols - maxCol - 1;
		cells = cells.map(cell => ({...cell, column: cell.column + offset}));
	}

	// check if the rotation is allowed!
	// first check if the rotation fits along rows
	const rows = cells.map(cell => cell.row);
	const minRow = Math.min(...rows);
	const maxRow = Math.max(...rows);
	const rowSpan = maxRow - minRow + 1;
	let isConflict = false;

	for (let row = minRow; row <= maxRow; row++) {
		const colsInRow = cells.filter(cell => cell.row === row)
			.map(cell => cell.column);
		const unclearedColumnsInRow = unclearedCells.filter(cell => cell.row === row)
			.map(cell => cell.column);
		const combined = colsInRow.concat(unclearedColumnsInRow);

		if ((new Set(combined)).size < combined.length) {
			isConflict = true;
			break;
		}
	}

	// Now check columns. Allow blocks to be offset upwards so that they fit.
	// Maximum offset is total row span of the block.
	let rowOffset;
	if (!isConflict) {
		for (rowOffset = 0; rowOffset < rowSpan; rowOffset++) {
			for (let col = minCol; col <= maxCol; col++) {
				const rowsInCol = cells.filter(cell => cell.column === col)
					.map(cell => cell.row - rowOffset);
				const unclearedRowsInColumn = unclearedCells.filter(cell => cell.column === col)
					.map(cell => cell.row);
				const combined = rowsInCol.concat(unclearedRowsInColumn);

				if (Math.min(...rowsInCol) < 0 || Math.max(...rowsInCol) >= numRows || (new Set(combined)).size < combined.length) {
					isConflict = true;
					break;
				} else {
					isConflict = false;
				}
			}
			if (!isConflict) {
				if (rowOffset > 0) {
					cells = cells.map(cell => ({...cell, row: cell.row - rowOffset}));
				}
				break;
			}
		}
	}


	if (isConflict) {
		// Do not update state with rotated block if it cannot fit.
		return state;
	} else {
		activeBlock = {
			orientation: newOrientation,
			type,
			unrotatedCells,
			cells
		};

		return {
			...state,
			activeBlock
		};
	}

}
