import {IBlock} from '../interfaces/block.interface';
import {getBlockWidth} from './getBlockWidth';

export function centerBlock(block: IBlock, numCols: number, roundToNearest: boolean = true): IBlock {
	const width = getBlockWidth(block);
	const offset = roundToNearest ? Math.floor((numCols - width) / 2) : (numCols - width) / 2;
	return {
		...block,
		cells: block.cells.map(cell => ({...cell, column: cell.column + offset})),
		unrotatedCells: block.unrotatedCells.map(cell => ({...cell, column: cell.column + offset}))
	};
}
