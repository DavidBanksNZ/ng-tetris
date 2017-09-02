import {Action} from '@ngrx/store';

import {ITetrisState} from '../state.interface';
import {ActionWithPayload} from '../../interfaces/actionWithPayload.interface';
import {offsetTetromino} from '../../helpers/offsetTetromino';
import {centerTetromino} from '../../helpers/centerTetromino';
import {generateRandomTetromino} from '../../helpers/generateRandomTetromino';
import {calculateInterval} from '../../helpers/calculateInterval';
import {isOverlapping} from '../../helpers/isOverlapping';
import {calculateSpacesLeft} from '../../helpers/calculateMaxSpacesLeft';
import {HARD_DROP} from '../actions';


export function moveActiveTetrominoDownMapper(state: ITetrisState, action: Action): ITetrisState {

	const isHardDrop = action.type === HARD_DROP;
	const isAuto = (action as ActionWithPayload<boolean>).payload;

	const {numRows, numCols, linesPerLevel} = state;
	let {unclearedCells, level, linesUntilNextLevel, isFinished, isTiming,
		nextTetromino, activeTetromino, score, combo, ghostCells} = state;

	let spacesToMove = calculateSpacesLeft(activeTetromino, unclearedCells, numRows);

	if (spacesToMove > 0) {

		if (!isAuto) {
			// If tetromino was moved down faster by user interaction, increase the score
			// by 1 for a one tetromino change. Increase score by twice the rows dropped for a hard drop.
			score += (isHardDrop ? spacesToMove * 2 : 1);
		}

		activeTetromino = offsetTetromino(activeTetromino, 0, isHardDrop ? spacesToMove : 1, numRows, numCols);
		spacesToMove = isHardDrop ? 0 : spacesToMove;
	}
	if (spacesToMove === 0) {

		const rows = activeTetromino.cells.map(cell => cell.row);
		const minRow = Math.min(...rows);
		const maxRow = Math.max(...rows);

		if (maxRow < 0) {
			// Tetromino has landed totally above the board. Game is over.
			return {...state, isFinished: true, isTiming: false};
		}

		unclearedCells = [...unclearedCells, ...activeTetromino.cells];

		// Need to check is rows can be cleared before ending game
		let rowsCleared = 0;

		// Ascending order is very important in this loop, since lower rows may change each iteration.
		for (let row = Math.max(0, minRow); row <= maxRow; row++) {
			const unclearedCellsInRow = unclearedCells.filter(cell => cell.row === row);
			const isFullRow = unclearedCellsInRow.length === numCols;
			if (isFullRow) {
				// Remove uncleared cells in this row, move above rows down 1
				unclearedCells = unclearedCells
					.filter(cell => cell.row !== row)
					.map(cell => {
						return cell.row < row ? {...cell, row: cell.row + 1} : cell;
					});
				rowsCleared += 1;
			}
		}

		if (rowsCleared > 0) {
			score += combo * 50;
			combo += 1;

			linesUntilNextLevel -= rowsCleared;
			switch (rowsCleared) {
				case 4:  score += 800 * level; break;
				case 3:  score += 500 * level; break;
				case 2:  score += 300 * level; break;
				default: score += 100 * level; break;
			}

			if (linesUntilNextLevel <= 0) {
				level += 1;
				linesUntilNextLevel = linesPerLevel;
			}

			// Perfect clearing bonus
			if (unclearedCells.length === 0) {
				score += 1200 * level;
			}

		} else {
			combo = 0;
		}

		const nextActiveTetromino = offsetTetromino(centerTetromino(nextTetromino, state.numCols), 0, 0, numRows, numCols);

		if (isOverlapping(nextActiveTetromino, unclearedCells)) {
			// if next block will overlap existing uncleared cells, game is over.
			isFinished = true;
			isTiming = false;
		} else {
			activeTetromino = nextActiveTetromino;
			nextTetromino = generateRandomTetromino();

			spacesToMove = calculateSpacesLeft(activeTetromino, unclearedCells, numRows);

			ghostCells = activeTetromino.cells.map(cell => ({
				...cell,
				row: cell.row + spacesToMove
			}));
		}
	} else {
		ghostCells = activeTetromino.cells.map(cell => ({
			...cell,
			row: cell.row + spacesToMove - 1
		}));
	}

	return {
		...state,
		unclearedCells,
		linesUntilNextLevel,
		level,
		combo,
		interval: calculateInterval(level),
		partialInterval: 0,
		timestamp: Date.now(),
		ghostCells,
		activeTetromino,
		nextTetromino,
		isFinished,
		isTiming,
		score
	};
}
