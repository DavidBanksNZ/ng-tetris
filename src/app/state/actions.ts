
import {Action} from '@ngrx/store';

export const RESET_SCORE = 'RESET_SCORE';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';

export const MOVE_ACTIVE_BLOCK_DOWN = 'MOVE_ACTIVE_BLOCK_DOWN';
export const MOVE_ACTIVE_BLOCK_LEFT = 'MOVE_ACTIVE_BLOCK_LEFT';
export const MOVE_ACTIVE_BLOCK_RIGHT = 'MOVE_ACTIVE_BLOCK_RIGHT';


export function newGame(): Action {
	return {type: NEW_GAME};
}

export function togglePause(): Action {
	return {type: TOGGLE_PAUSE};
}

export function moveActiveBlockDown(): Action {
	return {type: MOVE_ACTIVE_BLOCK_DOWN};
}

export function moveActiveBlockLeft(): Action {
	return {type: MOVE_ACTIVE_BLOCK_LEFT};
}

export function moveActiveBlockRight(): Action {
	return {type: MOVE_ACTIVE_BLOCK_RIGHT};
}
