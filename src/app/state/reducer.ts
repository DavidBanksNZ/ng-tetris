import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';

import {
	MOVE_ACTIVE_BLOCK_DOWN, MOVE_ACTIVE_BLOCK_LEFT, MOVE_ACTIVE_BLOCK_RIGHT, NEW_GAME,
	ROTATE_ACTIVE_BLOCK, TOGGLE_PAUSE
} from './actions';
import {generateRandomBlock} from '../helpers/generateRandomBlock';
import {moveActiveBlockDownMapper} from './mappers/moveActiveBlockDown';
import {moveActiveBlockLeftMapper} from './mappers/moveActiveBlockLeft';
import {moveActiveBlockRightMapper} from './mappers/moveActiveBlockRight';
import {rotateActiveBlockMapper} from './mappers/rotateActiveBlock';
import {newGameMapper} from './mappers/newGame';
import {togglePauseMapper} from './mappers/togglePause';


const INITIAL_STATE: ITetrisState = {
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 1,
	linesPerLevel: 10,
	linesUntilNextLevel: 10,
	activeBlock: null,
	nextBlock: generateRandomBlock(),
	score: 0,
	totalBlocks: 0,
	totalLinesCleared: 0,
	unclearedCells: [],
	isStarted: false,
	isFinished: false,

	isTiming: false,
	timestamp: 0,
	interval: 0,
	partialInterval: 0
};



export function tetrisReducer(state: ITetrisState = INITIAL_STATE, action: Action) {

	switch (action.type) {

		case NEW_GAME:
			return newGameMapper(state, action);

		case TOGGLE_PAUSE:
			return togglePauseMapper(state, action);

		case MOVE_ACTIVE_BLOCK_DOWN:
			return moveActiveBlockDownMapper(state, action);

		case MOVE_ACTIVE_BLOCK_LEFT:
			return moveActiveBlockLeftMapper(state, action);

		case MOVE_ACTIVE_BLOCK_RIGHT:
			return moveActiveBlockRightMapper(state, action);

		case ROTATE_ACTIVE_BLOCK:
			return rotateActiveBlockMapper(state, action);

		default:
			return state;

	}

}
