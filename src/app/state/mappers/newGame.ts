import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {calculateInterval} from '../../helpers/calculateInterval';
import {centerTetromino} from '../../helpers/centerTetromino';
import {generateRandomTetromino} from '../../helpers/generateRandomTetromino';


export function newGameMapper(state: ITetrisState, action: Action): ITetrisState {
	return {
		...state,
		isStarted: true,
		isTiming: true,
		partialInterval: 0,
		timestamp: Date.now(),
		interval: calculateInterval(1),
		isFinished: false,
		level: 1,
		linesUntilNextLevel: state.linesPerLevel,
		score: 0,
		unclearedCells: [],
		activeTetromino: centerTetromino(state.nextTetromino, state.numCols),
		nextTetromino: generateRandomTetromino()
	};
}
