import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';
import {BlockType} from '../enums/blockType.enum';
import {NEW_GAME, TOGGLE_PAUSE} from './actions';
import {centerBlock, generateRandomBlock} from '../helpers/generateBlock';


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
		default:
			return state;
	}

}
