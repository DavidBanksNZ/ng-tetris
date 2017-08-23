
import {Action} from '@ngrx/store';

export const RESET_SCORE = 'RESET_SCORE';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';


export function newGame(): Action {
	return {type: NEW_GAME};
}

export function togglePause(): Action {
	return {type: TOGGLE_PAUSE};
}
