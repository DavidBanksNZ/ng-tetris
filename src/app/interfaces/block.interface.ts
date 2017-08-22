import {BlockType} from '../enums/blockType.enum';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {ICell} from './cell.interface';

export interface IBlock {
	type: BlockType;
	orientation: BlockOrientation;
	cells: ICell[];
}
