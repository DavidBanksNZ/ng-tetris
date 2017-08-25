import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';

import {
	MOVE_ACTIVE_BLOCK_DOWN, MOVE_ACTIVE_BLOCK_LEFT, MOVE_ACTIVE_BLOCK_RIGHT, NEW_GAME,
	TOGGLE_PAUSE
} from './actions';
import {centerBlock} from '../helpers/centerBlock';
import {generateRandomBlock} from '../helpers/generateRandomBlock';
import {moveActiveBlockDownMapper} from './mappers/moveActiveBlockDown';
import {moveActiveBlockLeftMapper} from './mappers/moveActiveBlockLeft';
import {moveActiveBlockRightMapper} from './mappers/moveActiveBlockRight';


const INITIAL_STATE: ITetrisState = {
	gameId: 0,
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 0,
	linesPerLevel: 10,
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
				level: 1,
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
			return moveActiveBlockDownMapper(state, action);

		case MOVE_ACTIVE_BLOCK_LEFT:
			return moveActiveBlockLeftMapper(state, action);

		case MOVE_ACTIVE_BLOCK_RIGHT:
			return moveActiveBlockRightMapper(state, action);

		default:
			return state;

	}

}
