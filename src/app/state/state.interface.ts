import {ICell} from '../interfaces/cell.interface';
import {ITetromino} from '../interfaces/tetromino.interface';

export interface ITetrisState {
	readonly numRows: number;
	readonly numCols: number;
	readonly cellSize: number;
	readonly level: number;
	readonly linesPerLevel: number;
	readonly linesUntilNextLevel: number;
	readonly activeTetromino: ITetromino | null;
	readonly nextTetromino: ITetromino | null;
	readonly score: number;
	readonly unclearedCells: ICell[];
	readonly isStarted: boolean;
	readonly isFinished: boolean;
	readonly combo: number;

	readonly timestamp: number;
	readonly isTiming: boolean;
	readonly interval: number;
	readonly partialInterval: number;
}

export interface IStore {
	tetris: ITetrisState;
}
