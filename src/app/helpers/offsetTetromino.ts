import {ITetromino} from '../interfaces/tetromino.interface';

export function offsetTetromino(tetromino: ITetromino, dx: number, dy: number, numRows: number, numCols: number): ITetromino {

	let _dx: number = dx;
	let _dy: number = dy;

	if (dx < 0) {
		const minX = Math.min(...tetromino.cells.map(cell => cell.column));
		_dx = Math.max(-minX, _dx);
	} else {
		const maxX = Math.max(...tetromino.cells.map(cell => cell.column));
		_dx = Math.min(numCols - maxX - 1, _dx);
	}

	if (dy < 0) {
		const minY = Math.min(...tetromino.cells.map(cell => cell.row));
		_dy = Math.max(-minY, _dy);
	} else {
		const maxY = Math.max(...tetromino.cells.map(cell => cell.row));
		_dy = Math.min(numRows - maxY - 1, _dy);
	}

	if (_dx === 0 && _dy === 0) {
		return tetromino;
	}

	return {
		...tetromino,
		cells: tetromino.cells.map(cell => ({
			...cell,
			row: cell.row + _dy,
			column: cell.column + _dx
		})),
		unrotatedCells: tetromino.unrotatedCells.map(cell => ({
			...cell,
			row: cell.row + _dy,
			column: cell.column + _dx
		}))
	};
}
