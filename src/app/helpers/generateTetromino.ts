import {TetrominoType} from '../enums/tetromino.enum';
import {ITetromino} from '../interfaces/tetromino.interface';
import {Orientation} from '../enums/orientation.enum';
import {ICell} from '../interfaces/cell.interface';
import {generateCell} from './generateCell';

export function generateTetromino (type: TetrominoType): ITetromino {

	let cells: ICell[];

	switch (type) {
		case TetrominoType.O:
			cells = [
				generateCell(-2, 0, type),
				generateCell(-2, 1, type),
				generateCell(-1, 0, type),
				generateCell(-1, 1, type)
			];
			break;
		case TetrominoType.T:
			cells = [
				generateCell(-1, 0, type),
				generateCell(-1, 1, type),
				generateCell(-1, 2, type),
				generateCell(-2, 1, type)
			];
			break;
		case TetrominoType.I:
			cells = [
				generateCell(-4, 0, type),
				generateCell(-3, 0, type),
				generateCell(-2, 0, type),
				generateCell(-1, 0, type)
			];
			break;
		case TetrominoType.L:
			cells = [
				generateCell(-3, 0, type),
				generateCell(-2, 0, type),
				generateCell(-1, 0, type),
				generateCell(-1, 1, type)
			];
			break;
		case TetrominoType.J:
			cells = [
				generateCell(-3, 1, type),
				generateCell(-2, 1, type),
				generateCell(-1, 1, type),
				generateCell(-1, 0, type)
			];
			break;
		case TetrominoType.Z:
			cells = [
				generateCell(-2, 0, type),
				generateCell(-2, 1, type),
				generateCell(-1, 1, type),
				generateCell(-1, 2, type)
			];
			break;
		case TetrominoType.S:
			cells = [
				generateCell(-1, 0, type),
				generateCell(-1, 1, type),
				generateCell(-2, 1, type),
				generateCell(-2, 2, type)
			];
			break;
		default:
			cells = [];
			break;
	}

	return {
		type,
		orientation: Orientation.Normal,
		cells,
		unrotatedCells: cells
	};
}

