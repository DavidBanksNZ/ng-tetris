import {ITetrisState} from '../state.interface';
import {Action} from '@ngrx/store';

import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';
import {offsetBlock} from '../../helpers/offsetBlock';


export function moveActiveBlockRightMapper(state: ITetrisState, action: Action): ITetrisState {
	const {activeBlock, numRows, numCols} = state;
	const unclearedCells = state.unclearedCells;

	let spacesToMove = numCols;
	const rows = activeBlock.cells.map(cell => cell.row);
	const minRow = Math.min(...rows);
	const maxRow = Math.max(...rows);

	for (let i = minRow; i <= maxRow; i++) {
		const cellsInRow = activeBlock.cells.filter(cell => cell.row === i);
		const columns = cellsInRow.map(cell => cell.column);
		const maxColumn = Math.max(...columns);
		const unclearedCellsInRow = unclearedCells
			.filter(cell => cell.row === i && cell.column > maxColumn);

		const lowestUnclearedCellColumn = unclearedCellsInRow.length > 0 ?
			Math.min(...unclearedCellsInRow.map(cell => cell.column)) :
			numCols;

		spacesToMove = Math.min(spacesToMove, lowestUnclearedCellColumn - maxColumn - 1);

		if (spacesToMove === 0) {
			break;
		}
	}

	let updatedBlock;

	if (spacesToMove > 0) {
		const allTheWay = (action as ActionWithPayload<boolean>).payload;
		updatedBlock = offsetBlock(activeBlock, allTheWay ? spacesToMove : 1, 0, numRows, numCols);
	} else {
		updatedBlock = activeBlock;
	}

	return {
		...state,
		activeBlock: updatedBlock
	};
}
