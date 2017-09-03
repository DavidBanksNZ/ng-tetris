import {ITetrisState} from '../state.interface';
import {TetrominoType} from '../../enums/tetromino.enum';
import {Orientation} from '../../enums/orientation.enum';
import {ICell} from '../../interfaces/cell.interface';
import {unique} from '../../helpers/unique';
import {calculateSpacesLeft} from '../../helpers/calculateMaxSpacesLeft';
import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';


export function rotateActiveTetrominoMapper(state: ITetrisState, action: ActionWithPayload<boolean>): ITetrisState {

	const isClockwise = action.payload;
	let {activeTetromino} = state;
	const {unclearedCells, numCols, numRows} = state;
	const {unrotatedCells, type, orientation} = activeTetromino;
	let {cells} = activeTetromino;

	let newOrientation: Orientation;
	let angle: number;

	// Determine the angle to rotate by and the new orientation
	switch (orientation) {
		case Orientation.Normal:
			newOrientation = isClockwise ? Orientation.FlippedLeft : Orientation.FlippedRight;
			angle = (isClockwise ? -0.5 : -1.5) * Math.PI;
			break;
		case Orientation.FlippedLeft:
			newOrientation = isClockwise ? Orientation.UpsideDown: Orientation.Normal;
			angle = (isClockwise ? -1 : 0) * Math.PI;
			break;
		case Orientation.UpsideDown:
			newOrientation = isClockwise ? Orientation.FlippedRight : Orientation.FlippedLeft;
			angle = (isClockwise ? -1.5 : -0.5) * Math.PI;
			break;
		case Orientation.FlippedRight:
			newOrientation = isClockwise ? Orientation.Normal : Orientation.UpsideDown;
			angle = (isClockwise ? 0 : -1) * Math.PI;
			break;
		default:
			newOrientation = orientation;
			angle = 0;
			break;
	}

	// Do not perform rotation for square - unnecessary.
	if (type === TetrominoType.O) {
		activeTetromino = {...activeTetromino, orientation: newOrientation};
		return {...state, activeTetromino};
	}

	const centroid = getCentroid(unrotatedCells, type);

	// Now do the rotation
	// If tetromino is touching the bottom of the board,
	// the rotated tetromino will be forced to also be touching the bottom
	// of the board.
	let maxRow = Math.max(...cells.map(cell => cell.row));
	const forceToBottom = maxRow  === numRows - 1;
	cells = angle !== 0 ? rotate(unrotatedCells, angle, centroid) : [...unrotatedCells];

	if (forceToBottom) {
		const formerMaxRow = maxRow;
		maxRow = Math.max(...cells.map(cell => cell.row));
		const rowOffset = formerMaxRow - maxRow;
		if (rowOffset > 0) {
			cells = cells.map(cell => ({
				...cell,
				row: cell.row + rowOffset
			}));
		}
	}

	// make sure rotated tetromino not outside bounds
	const cols = cells.map(cell => cell.column);
	const minCol = Math.min(...cols);
	const maxCol = Math.max(...cols);

	let offset = 0;
	if (minCol < 0) {
		// move tetromino to the right
		offset = -minCol;
	}  else if (maxCol >= numCols) {
		// move tetromino to the left
		offset = numCols - maxCol - 1;
	}

	if (offset !== 0) {
		cells = cells.map(cell => ({...cell, column: cell.column + offset}));
	}

	// check if the rotation is allowed!
	// first check if the rotation works horizontally
	const rows = cells.map(cell => cell.row);
	const minRow = Math.min(...rows);
	maxRow = Math.max(...rows);
	const rowSpan = maxRow - minRow + 1;
	let isConflict = false;

	for (let row = minRow; row <= maxRow; row++) {

		const colsInRow = unique(cells.filter(cell => cell.row === row)
			.map(cell => cell.column));

		const unclearedColumnsInRow = unique(unclearedCells.filter(cell => cell.row === row)
			.map(cell => cell.column));

		const combined = colsInRow.concat(unclearedColumnsInRow);

		if (unique(combined).length < combined.length) {
			isConflict = true;
			break;
		}
	}

	// Now check rotation works vertically. Allow tetrominos to be offset upwards so that they fit.
	// Maximum offset is total row span of the tetromino.
	let rowOffset;
	if (!isConflict) {
		for (rowOffset = 0; rowOffset < rowSpan; rowOffset++) {
			for (let col = minCol; col <= maxCol; col++) {

				const rowsInCol = unique(cells.filter(cell => cell.column === col)
					.map(cell => cell.row - rowOffset));

				const unclearedRowsInColumn = unique(unclearedCells.filter(cell => cell.column === col)
					.map(cell => cell.row));

				const combined = rowsInCol.concat(unclearedRowsInColumn);

				if (unclearedRowsInColumn.length > 0 && (Math.max(...rowsInCol) >= numRows || unique(combined).length < combined.length)) {
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
		// Do not update state with rotated tetromino if it cannot fit.
		return state;
	}

	activeTetromino = {
		orientation: newOrientation,
		type,
		unrotatedCells,
		cells
	};

	const spacesToMove = calculateSpacesLeft(activeTetromino, unclearedCells, numRows);

	const ghostCells = activeTetromino.cells.map(cell => ({
		...cell,
		row: cell.row + spacesToMove
	}));

	return {
		...state,
		activeTetromino,
		ghostCells
	};

}


function rotate(cells: ICell[], angle: number, centroid: number[]): ICell[] {
	const cosAngle = Math.cos(angle);
	const sinAngle = Math.sin(angle);

	return cells.map(cell => {
		const translatedRow = cell.row - centroid[0];
		const translatedCol = cell.column - centroid[1];
		// use a rounding trick to avoid tiny rounding errors causing incorrect positions
		const row = Math.ceil(0.5 * Math.round(2 * (centroid[0] + cosAngle * translatedRow - sinAngle * translatedCol)));
		const column = Math.floor(0.5 * Math.round(2 * (centroid[1] + sinAngle * translatedRow + cosAngle * translatedCol)));
		return {type: cell.type, row, column};
	});
}


function getCentroid(cells: ICell[], tetrominoType: TetrominoType): number[] {
	switch (tetrominoType) {
		case TetrominoType.I:
		case TetrominoType.Z:
			return [cells[1].row + 0.5, cells[1].column];
		case TetrominoType.S:
			return [cells[1].row - 0.5, cells[1].column];
		case TetrominoType.T:
		case TetrominoType.L:
		case TetrominoType.J:
		default:
			return [cells[1].row, cells[1].column];
	}
}
