import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';

import {
	SOFT_DROP, HARD_DROP, MOVE_ACTIVE_TETROMINO_LEFT, MOVE_ACTIVE_TETROMINO_RIGHT, NEW_GAME,
	ROTATE_ACTIVE_TETROMINO, TOGGLE_PAUSE, TOGGLE_HELP_MODAL
} from './actions';
import {generateRandomTetromino} from '../helpers/generateRandomTetromino';
import {moveActiveTetrominoDownMapper} from './mappers/moveActiveTetrominoDown';
import {moveActiveTetrominoLeftMapper} from './mappers/moveActiveTetrominoLeft';
import {moveActiveTetrominoRightMapper} from './mappers/moveActiveTetrominoRight';
import {rotateActiveTetrominoMapper} from './mappers/rotateActiveTetromino';
import {newGameMapper} from './mappers/newGame';
import {togglePauseMapper} from './mappers/togglePause';
import {ActionWithPayload} from '../interfaces/actionWithPayload.interface';


const INITIAL_STATE: ITetrisState = {
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 1,
	linesPerLevel: 10,
	linesUntilNextLevel: 10,
	activeTetromino: null,
	nextTetromino: generateRandomTetromino(),
	score: 0,
	combo: 0,
	unclearedCells: [],
	ghostCells: [],
	isStarted: false,
	isFinished: false,

	isTiming: false,
	timestamp: 0,
	interval: 0,
	partialInterval: 0,

	isHelpModalOpen: false
};



export function tetrisReducer(state: ITetrisState = INITIAL_STATE, action: Action) {

	switch (action.type) {

		case NEW_GAME:
			return newGameMapper(state, action);

		case TOGGLE_PAUSE:
			return togglePauseMapper(state, action);

		case TOGGLE_HELP_MODAL:
			const isHelpModalOpen = (action as ActionWithPayload<boolean>).payload;
			return {
				...state,
				isHelpModalOpen,
				isPaused: true
			};

		case SOFT_DROP:
		case HARD_DROP:
			return moveActiveTetrominoDownMapper(state, action);

		case MOVE_ACTIVE_TETROMINO_LEFT:
			return moveActiveTetrominoLeftMapper(state, action);

		case MOVE_ACTIVE_TETROMINO_RIGHT:
			return moveActiveTetrominoRightMapper(state, action);

		case ROTATE_ACTIVE_TETROMINO:
			return rotateActiveTetrominoMapper(state, (action as ActionWithPayload<boolean>));

		default:
			return state;

	}

}
