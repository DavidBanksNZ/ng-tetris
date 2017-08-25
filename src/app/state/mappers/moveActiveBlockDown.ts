import {ITetrisState} from '../state.interface';
import {Action} from '@ngrx/store';

import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';
import {offsetBlock} from '../../helpers/offsetBlock';
import {centerBlock} from '../../helpers/centerBlock';
import {generateRandomBlock} from '../../helpers/generateRandomBlock';


export function moveActiveBlockDownMapper(state: ITetrisState, action: Action): ITetrisState {
	const {activeBlock, numRows, numCols} = state;
	let unclearedCells = state.unclearedCells;

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

	let updatedBlock;
	let gameOver = false;

	if (spacesToMove > 0) {
		const allTheWay = (action as ActionWithPayload<boolean>).payload;
		updatedBlock = offsetBlock(activeBlock, 0, allTheWay ? spacesToMove : 1, numRows, numCols);
	} else {
		const minRow = Math.min(...activeBlock.cells.map(cell => cell.row));
		unclearedCells = [...unclearedCells, ...activeBlock.cells];
		if (minRow > 0) {
			updatedBlock = offsetBlock(centerBlock(generateRandomBlock(), state.numCols), 0, 1, numRows, numCols);
		} else {
			gameOver = true;
		}
	}

	return {
		...state,
		unclearedCells,
		activeBlock: updatedBlock,
		isFinished: gameOver
	};
}
