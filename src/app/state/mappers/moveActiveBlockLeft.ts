import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';
import {offsetBlock} from '../../helpers/offsetBlock';


export function moveActiveBlockLeftMapper(state: ITetrisState, action: Action): ITetrisState {
	const {activeBlock, numRows, numCols} = state;
	const unclearedCells = state.unclearedCells;

	let spacesToMove = numCols;
	const rows = activeBlock.cells.map(cell => cell.row);
	const minRow = Math.min(...rows);
	const maxRow = Math.max(...rows);

	for (let i = minRow; i <= maxRow; i++) {
		const cellsInRow = activeBlock.cells.filter(cell => cell.row === i);
		const columns = cellsInRow.map(cell => cell.column);
		const minColumn = Math.min(...columns);
		const unclearedCellsInRow = unclearedCells
			.filter(cell => cell.row === i && cell.column < minColumn);

		const highestUnclearedCellColumn = unclearedCellsInRow.length > 0 ?
			Math.max(...unclearedCellsInRow.map(cell => cell.column)) :
			-1;

		spacesToMove = Math.min(spacesToMove, minColumn - highestUnclearedCellColumn - 1);

		if (spacesToMove === 0) {
			break;
		}
	}

	let updatedBlock;

	if (spacesToMove > 0) {
		const allTheWay = (action as ActionWithPayload<boolean>).payload;
		updatedBlock = offsetBlock(activeBlock, allTheWay ? -spacesToMove : -1, 0, numRows, numCols);
	} else {
		updatedBlock = activeBlock;
	}

	return {
		...state,
		activeBlock: updatedBlock
	};
}
