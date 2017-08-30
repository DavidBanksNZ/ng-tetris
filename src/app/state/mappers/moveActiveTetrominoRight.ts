import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {offsetTetromino} from '../../helpers/offsetTetromino';
import {calculateSpacesLeft} from '../../helpers/calculateMaxSpacesLeft';


export function moveActiveTetrominoRightMapper(state: ITetrisState, action: Action): ITetrisState {
	const {activeTetromino, numRows, numCols} = state;
	let {ghostCells} = state;
	const unclearedCells = state.unclearedCells;

	let spacesToMove = numCols;
	const rows = activeTetromino.cells.map(cell => cell.row);
	const minRow = Math.min(...rows);
	const maxRow = Math.max(...rows);

	for (let i = minRow; i <= maxRow; i++) {
		const cellsInRow = activeTetromino.cells.filter(cell => cell.row === i);
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

	if (spacesToMove > 0) {
		const updatedTetromino = offsetTetromino(activeTetromino, 1, 0, numRows, numCols);

		const spacesToMoveDown = calculateSpacesLeft(updatedTetromino, unclearedCells, numRows);

		ghostCells = updatedTetromino.cells.map(cell => ({
			...cell,
			row: cell.row + spacesToMoveDown
		}));

		return {
			...state,
			ghostCells,
			activeTetromino: updatedTetromino
		};
	} else {
		// Can't move tetromino, return existing state
		return state;
	}
}
