import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';
import {offsetBlock} from '../../helpers/offsetBlock';
import {centerBlock} from '../../helpers/centerBlock';
import {generateRandomBlock} from '../../helpers/generateRandomBlock';


export function moveActiveBlockDownMapper(state: ITetrisState, action: Action): ITetrisState {
	const {numRows, numCols, linesPerLevel} = state;
	let {unclearedCells, level, linesUntilNextLevel, nextBlock, activeBlock, isFinished} = state;

	const spacesToMove = calculateSpacesLeft(activeBlock, unclearedCells, numRows);

	if (spacesToMove > 0) {
		const allTheWay = (action as ActionWithPayload<boolean>).payload;
		activeBlock = offsetBlock(activeBlock, 0, allTheWay ? spacesToMove : 1, numRows, numCols);
	} else {
		const rows = activeBlock.cells.map(cell => cell.row);
		let minRow = Math.min(...rows);
		const maxRow = Math.max(...rows);
		unclearedCells = [...unclearedCells, ...activeBlock.cells];

		// Need to check is rows can be cleared before ending game
		let rowsCleared = 0;

		// low-high order is very important in this loop, since lower rows may change each iteration.
		for (let row = Math.max(0, minRow); row <= maxRow; row++) {
			const unclearedCellsInRow = unclearedCells.filter(cell => cell.row === row);
			const isFullRow = unclearedCellsInRow.length === numCols;
			if (isFullRow) {
				// remove uncleared cells in this row, move above rows down 1
				unclearedCells = unclearedCells
					.filter(cell => cell.row !== row)
					.map(cell => {
						return cell.row < row ? {...cell, row: cell.row + 1} : cell;
					});
				rowsCleared += 1;
			}
		}

		if (rowsCleared > 0) {
			linesUntilNextLevel -= rowsCleared;

			// TODO - update score
			if (linesUntilNextLevel <= 0) {
				level += 1;
				linesUntilNextLevel = linesPerLevel;
			}
		}

		minRow += rowsCleared;

		if (minRow >= 0) {
			activeBlock = offsetBlock(centerBlock(nextBlock, state.numCols), 0, 0, numRows, numCols);
			nextBlock = generateRandomBlock();
		} else {
			isFinished = true;
			nextBlock = null;
		}
	}

	return {
		...state,
		unclearedCells,
		linesUntilNextLevel,
		level,
		activeBlock,
		nextBlock,
		isFinished
	};
}


function calculateSpacesLeft (activeBlock, unclearedCells, numRows) {
	let spacesToMove = numRows;
	const columns = activeBlock.cells.map(cell => cell.column);
	const minColumn = Math.min(...columns);
	const maxColumn = Math.max(...columns);

	for (let i = minColumn; i <= maxColumn; i++) {
		const cellsInColumn = activeBlock.cells.filter(cell => cell.column === i);
		const rows = cellsInColumn.map(cell => cell.row);
		const maxRow = Math.max(...rows);
		const unclearedCellsInColumn = unclearedCells
			.filter(cell => cell.column === i && cell.row > maxRow);

		const highestUnclearedCellRow = unclearedCellsInColumn.length > 0 ?
			Math.min(...unclearedCellsInColumn.map(cell => cell.row)) :
			numRows;

		spacesToMove = Math.min(spacesToMove, highestUnclearedCellRow - maxRow - 1);

		if (spacesToMove === 0) {
			break;
		}
	}
	return spacesToMove;
}
