import {ITetromino} from '../interfaces/tetromino.interface';
import {ICell} from '../interfaces/cell.interface';

export function isOverlapping(tetromino: ITetromino, unclearedCells: ICell[]): boolean {
	let isOverlapping = false;
	for (let i = 0, n = tetromino.cells.length; i < n; i++) {
		const cell = tetromino.cells[i];
		if (unclearedCells.filter(c => c.row === cell.row && c.column === cell.column).length > 0) {
			isOverlapping = true;
			break;
		}
	}
	return isOverlapping;
}
