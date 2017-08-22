import {BlockType} from '../enums/blockType.enum';
import {BlockOrientation} from '../enums/blockOrientation.enum';

export interface IBlock {
	type: BlockType;
	orientation: BlockOrientation;
	cells: number[];
}
