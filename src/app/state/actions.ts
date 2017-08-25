import {Action} from '@ngrx/store';
import {ActionWithPayload} from '../interfaces/actionWithPayload.interface';



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

export function moveActiveBlockDown(allTheWay: boolean): ActionWithPayload<boolean> {
	return {type: MOVE_ACTIVE_BLOCK_DOWN, payload: allTheWay};
}

export function moveActiveBlockLeft(allTheWay: boolean): ActionWithPayload<boolean> {
	return {type: MOVE_ACTIVE_BLOCK_LEFT, payload: allTheWay};
}

export function moveActiveBlockRight(allTheWay: boolean): ActionWithPayload<boolean> {
	return {type: MOVE_ACTIVE_BLOCK_RIGHT, payload: allTheWay};
}
