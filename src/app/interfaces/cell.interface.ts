import {BlockType} from '../enums/blockType.enum';

export interface ICell {
	readonly type: BlockType;
	readonly row: number;
	readonly column: number;
}
