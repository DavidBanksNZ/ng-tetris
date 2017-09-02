import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {calculateInterval} from '../../helpers/calculateInterval';
import {centerTetromino} from '../../helpers/centerTetromino';
import {generateRandomTetromino} from '../../helpers/generateRandomTetromino';


export function newGameMapper(state: ITetrisState, action: Action): ITetrisState {
	const activeTetromino = centerTetromino(state.nextTetromino, state.numCols);
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
		activeTetromino,
		ghostCells: activeTetromino.cells.map(cell => ({...cell, row: cell.row + state.numRows})),
		nextTetromino: generateRandomTetromino(),
		isHelpModalOpen: false
	};
}
