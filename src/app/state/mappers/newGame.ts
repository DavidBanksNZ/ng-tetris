import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {calculateInterval} from '../../helpers/calculateInterval';
import {centerBlock} from '../../helpers/centerBlock';
import {generateRandomBlock} from '../../helpers/generateRandomBlock';


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
		linesUntilNextLevel: 10,
		score: 0,
		totalBlocks: 0,
		totalLinesCleared: 0,
		unclearedCells: [],
		activeBlock: centerBlock(state.nextBlock, state.numCols),
		nextBlock: generateRandomBlock()
	};
}
