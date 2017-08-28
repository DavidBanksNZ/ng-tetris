import {TetrominoType} from '../enums/tetromino.enum';
import {ICell} from '../interfaces/cell.interface';

export function generateCell(row: number, column: number, type: TetrominoType): ICell {
	return {row, column, type};
}
