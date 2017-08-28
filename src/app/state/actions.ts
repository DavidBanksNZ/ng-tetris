import {Action} from '@ngrx/store';
import {ActionWithPayload} from '../interfaces/actionWithPayload.interface';

export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';

export const MOVE_ACTIVE_TETROMINO_DOWN = 'MOVE_ACTIVE_TETROMINO_DOWN';
export const MOVE_ACTIVE_TETROMINO_LEFT = 'MOVE_ACTIVE_TETROMINO_LEFT';
export const MOVE_ACTIVE_TETROMINO_RIGHT = 'MOVE_ACTIVE_TETROMINO_RIGHT';
export const ROTATE_ACTIVE_TETROMINO = 'ROTATE_ACTIVE_TETROMINO';


export function newGame(): Action {
	return {type: NEW_GAME};
}

export function togglePause(): Action {
	return {type: TOGGLE_PAUSE};
}

export function moveActiveTetrominoDown(isAuto: boolean, allTheWay: boolean = false): ActionWithPayload<{isAuto: boolean, allTheWay: boolean}> {
	return {type: MOVE_ACTIVE_TETROMINO_DOWN, payload: {isAuto, allTheWay}};
}

export function moveActiveTetrominoLeft(allTheWay: boolean): ActionWithPayload<boolean> {
	return {type: MOVE_ACTIVE_TETROMINO_LEFT, payload: allTheWay};
}

export function moveActiveTetrominoRight(allTheWay: boolean): ActionWithPayload<boolean> {
	return {type: MOVE_ACTIVE_TETROMINO_RIGHT, payload: allTheWay};
}

export function rotateActiveTetromino(): Action {
	return {type: ROTATE_ACTIVE_TETROMINO};
}
