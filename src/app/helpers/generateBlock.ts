import {BlockType} from '../enums/blockType.enum';
import {IBlock} from '../interfaces/block.interface';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {ICell} from '../interfaces/cell.interface';
import {generateCell} from './generateCell';

export function generateBlock (type: BlockType): IBlock {

	let cells: ICell[];

	switch (type) {
		case BlockType.Square:
			cells = [
				generateCell(-2, 0, type),
				generateCell(-2, 1, type),
				generateCell(-1, 0, type),
				generateCell(-1, 1, type),
			];
			break;
		case BlockType.Pyramid:
			cells = [
				generateCell(-1, 0, type),
				generateCell(-1, 1, type),
				generateCell(-1, 2, type),
				generateCell(-2, 1, type),
			];
			break;
		case BlockType.Long:
			cells = [
				generateCell(-4, 0, type),
				generateCell(-3, 0, type),
				generateCell(-2, 0, type),
				generateCell(-1, 0, type),
			];
			break;
		case BlockType.L:
			cells = [
				generateCell(-3, 0, type),
				generateCell(-2, 0, type),
				generateCell(-1, 0, type),
				generateCell(-1, 1, type),
			];
			break;
		case BlockType.ReverseL:
			cells = [
				generateCell(-3, 1, type),
				generateCell(-2, 1, type),
				generateCell(-1, 1, type),
				generateCell(-1, 0, type),
			];
			break;
		case BlockType.ZigZag:
			cells = [
				generateCell(-1, 0, type),
				generateCell(-2, 0, type),
				generateCell(-2, 1, type),
				generateCell(-3, 1, type),
			];
			break;
		case BlockType.ReverseZigZag:
			cells = [
				generateCell(-3, 0, type),
				generateCell(-2, 0, type),
				generateCell(-2, 1, type),
				generateCell(-1, 1, type),
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

