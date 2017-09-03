import {ITetromino} from '../interfaces/tetromino.interface';
import {TetrominoType, tetrominoEnumKeys} from '../enums/tetromino.enum';
import {Orientation} from '../enums/orientation.enum';

export function generateRandomTetromino(): ITetromino {
	const rand = Math.floor(Math.random() * tetrominoEnumKeys.length);
	const type = TetrominoType[tetrominoEnumKeys[rand]];

	let coords: Array<number[]>;

	switch (type) {
		case TetrominoType.O:
			coords = [[-2, 0], [-2, 1], [-1, 0], [-1, 1]];
			break;
		case TetrominoType.T:
			coords = [[-1, 0], [-1, 1], [-1, 2], [-2, 1]];
			break;
		case TetrominoType.I:
			coords = [[-4, 0], [-3, 0], [-2, 0], [-1, 0]];
			break;
		case TetrominoType.L:
			coords = [[-3, 0], [-2, 0], [-1, 0], [-1, 1]];
			break;
		case TetrominoType.J:
			coords = [[-3, 1], [-2, 1], [-1, 1], [-1, 0]];
			break;
		case TetrominoType.Z:
			coords = [[-2, 0], [-2, 1], [-1, 1], [-1, 2]];
			break;
		case TetrominoType.S:
			coords = [[-1, 0], [-1, 1], [-2, 1], [-2, 2]];
			break;
		default:
			coords = [];
			break;
	}

	const cells = coords.map(cell => ({row: cell[0], column: cell[1], type}));

	return {
		type,
		orientation: Orientation.Normal,
		cells,
		unrotatedCells: cells
	};
}
