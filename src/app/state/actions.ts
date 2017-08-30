import {Action} from '@ngrx/store';
import {ActionWithPayload} from '../interfaces/actionWithPayload.interface';

export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';

export const SOFT_DROP = 'SOFT_DROP';
export const HARD_DROP = 'HARD_DROP';
export const MOVE_ACTIVE_TETROMINO_LEFT = 'MOVE_ACTIVE_TETROMINO_LEFT';
export const MOVE_ACTIVE_TETROMINO_RIGHT = 'MOVE_ACTIVE_TETROMINO_RIGHT';
export const ROTATE_ACTIVE_TETROMINO = 'ROTATE_ACTIVE_TETROMINO';


export function newGame(): Action {
	return {type: NEW_GAME};
}

export function togglePause(): Action {
	return {type: TOGGLE_PAUSE};
}

export function softDrop(isAuto: boolean): ActionWithPayload<boolean> {
	return {type: SOFT_DROP, payload: isAuto};
}

export function hardDrop(): Action {
	return {type: HARD_DROP};
}

export function moveActiveTetrominoLeft(): Action {
	return {type: MOVE_ACTIVE_TETROMINO_LEFT};
}

export function moveActiveTetrominoRight(): Action {
	return {type: MOVE_ACTIVE_TETROMINO_RIGHT};
}

export function rotateActiveTetromino(): Action {
	return {type: ROTATE_ACTIVE_TETROMINO};
}
