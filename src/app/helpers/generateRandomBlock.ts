import {IBlock} from '../interfaces/block.interface';
import {BlockType, blockTypeEnumKeys} from '../enums/blockType.enum';
import {generateBlock} from './generateBlock';

export function generateRandomBlock(): IBlock {
	const rand = Math.floor(Math.random() * blockTypeEnumKeys.length);
	const type = BlockType[blockTypeEnumKeys[rand]];
	return generateBlock(type);
}
