import {ITetromino} from '../interfaces/tetromino.interface';

export function getTetrominoWidth(tetromino: ITetromino): number {
	const columns = tetromino.cells.map(cell => cell.column);
	const min = Math.min(...columns);
	const max = Math.max(...columns);
	return max - min + 1;
}
