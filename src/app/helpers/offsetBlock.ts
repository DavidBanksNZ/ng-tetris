import {IBlock} from '../interfaces/block.interface';

export function offsetBlock(block: IBlock, dx: number, dy: number, numRows: number, numCols: number): IBlock {

	let _dx: number = dx;
	let _dy: number = dy;

	if (dx < 0) {
		const minX = Math.min(...block.cells.map(cell => cell.column));
		_dx = Math.max(-minX, _dx);
	} else {
		const maxX = Math.max(...block.cells.map(cell => cell.column));
		_dx = Math.min(numCols - maxX - 1, _dx);
	}

	if (dy < 0) {
		const minY = Math.min(...block.cells.map(cell => cell.row));
		_dy = Math.max(-minY, _dy);
	} else {
		const maxY = Math.max(...block.cells.map(cell => cell.row));
		_dy = Math.min(numRows - maxY - 1, _dy);
	}

	if (_dx === 0 && _dy === 0) {
		return block;
	}

	return {
		...block,
		cells: block.cells.map(cell => ({
			...cell,
			row: cell.row + _dy,
			column: cell.column + _dx
		})),
		unrotatedCells: block.unrotatedCells.map(cell => ({
			...cell,
			row: cell.row + _dy,
			column: cell.column + _dx
		}))
	};
}
