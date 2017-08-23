import {BlockType, blockTypeEnumKeys} from '../enums/blockType.enum';
import {IBlock} from '../interfaces/block.interface';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {ICell} from '../interfaces/cell.interface';
import {generateCell} from './generateCell';

export function generateBlock (type: BlockType): IBlock {

	let cells: ICell[];

	switch (type) {
		case BlockType.Square:
			cells = [
				generateCell(0, 0, type),
				generateCell(0, 1, type),
				generateCell(1, 0, type),
				generateCell(1, 1, type),
			];
			break;
		case BlockType.Pyramid:
			cells = [
				generateCell(1, 0, type),
				generateCell(1, 1, type),
				generateCell(1, 2, type),
				generateCell(0, 1, type),
			];
			break;
		case BlockType.Long:
			cells = [
				generateCell(0, 0, type),
				generateCell(1, 0, type),
				generateCell(2, 0, type),
				generateCell(3, 0, type),
			];
			break;
		case BlockType.L:
			cells = [
				generateCell(0, 0, type),
				generateCell(1, 0, type),
				generateCell(2, 0, type),
				generateCell(2, 1, type),
			];
			break;
		case BlockType.ReverseL:
			cells = [
				generateCell(0, 1, type),
				generateCell(1, 1, type),
				generateCell(2, 1, type),
				generateCell(2, 0, type),
			];
			break;
		case BlockType.ZigZag:
			cells = [
				generateCell(2, 0, type),
				generateCell(1, 0, type),
				generateCell(1, 1, type),
				generateCell(0, 1, type),
			];
			break;
		case BlockType.ReverseZigZag:
			cells = [
				generateCell(0, 0, type),
				generateCell(1, 0, type),
				generateCell(1, 1, type),
				generateCell(2, 1, type),
			];
			break;
		default:
			cells = [];
			break;
	}

	return {
		type,
		orientation: BlockOrientation.Normal,
		cells
	};
}

export function generateRandomBlock(): IBlock {
	const rand = Math.floor(Math.random() * blockTypeEnumKeys.length);
	const type = BlockType[blockTypeEnumKeys[rand]];
	return generateBlock(type);
}

export function centerBlock(block: IBlock, numCols: number): IBlock {
	const width = getBlockWidth(block);
	const offset = (numCols - width) / 2;
	return {
		...block,
		cells: block.cells.map(cell => ({...cell, column: cell.column + offset}))
	};
}

export function getBlockWidth(block: IBlock): number {
	const columns = block.cells.map(cell => cell.column);
	const min = Math.min(...columns);
	const max = Math.max(...columns);
	return max - min + 1;
}
