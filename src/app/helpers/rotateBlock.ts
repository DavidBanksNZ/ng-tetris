import {IBlock} from '../interfaces/block.interface';
import {BlockOrientation} from '../enums/blockOrientation.enum';

export function rotateBlock(block: IBlock, orientation: BlockOrientation): IBlock {
	return {
		...block,
		orientation,
		cells: []
	};
}
