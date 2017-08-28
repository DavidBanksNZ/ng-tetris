import {TetrominoType} from '../enums/tetromino.enum';
import {Orientation} from '../enums/orientation.enum';
import {ICell} from './cell.interface';

export interface ITetromino {
	type: TetrominoType;
	orientation: Orientation;
	cells: ICell[];
	unrotatedCells: ICell[];
}
