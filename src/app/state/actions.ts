import {Action} from '@ngrx/store';
import {ActionWithPayload} from '../interfaces/actionWithPayload.interface';

export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';
export const TOGGLE_HELP_MODAL = 'TOGGLE_HELP_MODAL';

export const SOFT_DROP = 'SOFT_DROP';
export const HARD_DROP = 'HARD_DROP';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';


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
	return {type: MOVE_LEFT};
}

export function moveActiveTetrominoRight(): Action {
	return {type: MOVE_RIGHT};
}

export function rotateActiveTetromino(isClockwise: boolean): ActionWithPayload<boolean> {
	return {type: ROTATE, payload: isClockwise};
}

export function toggleHelpModal(isOpen: boolean): ActionWithPayload<boolean> {
	return {type: TOGGLE_HELP_MODAL, payload: isOpen};
}
