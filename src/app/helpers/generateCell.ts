import {BlockType} from '../enums/blockType.enum';
import {ICell} from '../interfaces/cell.interface';

export function generateCell(row: number, column: number, type: BlockType): ICell {
	return {row, column, type};
}
