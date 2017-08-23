import {IBlock} from '../interfaces/block.interface';
import {getBlockWidth} from './getBlockWidth';

export function centerBlock(block: IBlock, numCols: number): IBlock {
	const width = getBlockWidth(block);
	const offset = (numCols - width) / 2;
	return {
		...block,
		cells: block.cells.map(cell => ({...cell, column: cell.column + offset}))
	};
}
