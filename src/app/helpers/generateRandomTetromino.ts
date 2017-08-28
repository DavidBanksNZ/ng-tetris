import {ITetromino} from '../interfaces/tetromino.interface';
import {TetrominoType, tetrominoEnumKeys} from '../enums/tetromino.enum';
import {generateTetromino} from './generateTetromino';

export function generateRandomTetromino(): ITetromino {
	const rand = Math.floor(Math.random() * tetrominoEnumKeys.length);
	const type = TetrominoType[tetrominoEnumKeys[rand]];
	return generateTetromino(type);
}
