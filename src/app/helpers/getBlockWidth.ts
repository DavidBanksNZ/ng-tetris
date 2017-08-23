import {IBlock} from '../interfaces/block.interface';

export function getBlockWidth(block: IBlock): number {
	const columns = block.cells.map(cell => cell.column);
	const min = Math.min(...columns);
	const max = Math.max(...columns);
	return max - min + 1;
}
