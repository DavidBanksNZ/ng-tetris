import {TetrominoType} from '../enums/tetromino.enum';

export interface ICell {
	readonly type: TetrominoType;
	readonly row: number;
	readonly column: number;
}
