import {ITetromino} from '../interfaces/tetromino.interface';
import {getTetrominoWidth} from './getTetrominoWidth';

export function centerTetromino(tetromino: ITetromino, numCols: number, roundToNearest: boolean = true): ITetromino {
	const width = getTetrominoWidth(tetromino);
	const offset = roundToNearest ? Math.floor((numCols - width) / 2) : (numCols - width) / 2;
	const cells = tetromino.cells.map(cell => ({...cell, column: cell.column + offset}));
	const unrotatedCells = tetromino.unrotatedCells.map(cell => ({...cell, column: cell.column + offset}));
	return {...tetromino, cells, unrotatedCells};
}
