import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';
import {MOVE_ACTIVE_BLOCK_DOWN, NEW_GAME, TOGGLE_PAUSE} from './actions';
import {centerBlock} from '../helpers/centerBlock';
import {generateRandomBlock} from '../helpers/generateRandomBlock';
import {offsetBlock} from '../helpers/offsetBlock';


const INITIAL_STATE: ITetrisState = {
	gameId: 0,
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 0,
	linesUntilNextLevel: 10,
	activeBlock: null,
	score: 0,
	totalBlocks: 0,
	totalLinesCleared: 0,
	unclearedCells: [],
	isStarted: false,
	isFinished: false,
	isPaused: false
};


export function tetrisReducer(state: ITetrisState = INITIAL_STATE, action: Action) {

	switch (action.type) {

		case NEW_GAME:
			return {
				...state,
				gameId: Date.now(),
				isStarted: true,
				isPaused: false,
				isFinished: false,
				level: 0,
				linesUntilNextLevel: 10,
				score: 0,
				totalBlocks: 0,
				totalLinesCleared: 0,
				unclearedCells: [],
				activeBlock: centerBlock(generateRandomBlock(), state.numCols)
			};

		case TOGGLE_PAUSE:
			return {
				...state,
				isPaused: !state.isPaused
			};

		case MOVE_ACTIVE_BLOCK_DOWN:
			const {activeBlock, numRows, numCols} = state;
			let unclearedCells = state.unclearedCells;

			let spaceToMove = true;
			const columns = activeBlock.cells.map(cell => cell.column);
			const minColumn = Math.min(...columns);
			const maxColumn = Math.max(...columns);

			for (let i = minColumn; i <= maxColumn; i++) {
				const cellsInColumn = activeBlock.cells.filter(cell => cell.column === i);
				const rows = cellsInColumn.map(cell => cell.row);
				const maxRow = Math.max(...rows);
				const unclearedCellsInColumn = unclearedCells.filter(cell => cell.column === i);

				const highestUnclearedCellRow = unclearedCellsInColumn.length > 0 ?
					Math.min(...unclearedCellsInColumn.map(cell => cell.row)) :
					numRows;

				if (maxRow + 1 === highestUnclearedCellRow) {
					spaceToMove = false;
					break;
				}
			}

			let updatedBlock;
			let gameOver = false;

			if (spaceToMove) {
				updatedBlock = offsetBlock(activeBlock, 0, 1, numRows, numCols);
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

		default:
			return state;

	}

}
