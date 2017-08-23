import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';
import {BlockType} from '../enums/blockType.enum';
import {MOVE_ACTIVE_BLOCK_DOWN, NEW_GAME, TOGGLE_PAUSE} from './actions';
import {centerBlock} from '../helpers/centerBlock';
import {generateRandomBlock} from '../helpers/generateRandomBlock';
import {offsetBlock} from '../helpers/offsetBlock';


const INITIAL_STATE: ITetrisState = {
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 0,
	linesUntilNextLevel: 10,
	activeBlock: null,
	score: 0,
	totalBlocks: 0,
	totalLinesCleared: 0,
	unclearedCells: [
		{row: 5, column: 5, type: BlockType.Pyramid},
		{row: 12, column: 8, type: BlockType.Square},
		{row: 12, column: 9, type: BlockType.ZigZag},
		{row: 2, column: 7, type: BlockType.L}
	],
	isStarted: false,
	isFinished: false,
	isPaused: false
};


export function tetrisReducer(state: ITetrisState = INITIAL_STATE, action: Action) {

	switch (action.type) {

		case NEW_GAME:
			return {
				...state,
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
			let updatedBlock = offsetBlock(activeBlock, 0, 1, numRows, numCols);
			let cells = state.unclearedCells;

			if (updatedBlock.cells[0].row === activeBlock.cells[0].row) {
				updatedBlock = centerBlock(generateRandomBlock(), state.numCols);
				cells = [
					...cells,
					...activeBlock.cells
				];
			}

			return {
				...state,
				unclearedCells: cells,
				activeBlock: updatedBlock
			};

		default:
			return state;

	}

}
