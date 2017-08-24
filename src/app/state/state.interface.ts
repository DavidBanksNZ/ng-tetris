import {ICell} from '../interfaces/cell.interface';
import {IBlock} from '../interfaces/block.interface';

export interface ITetrisState {
	readonly gameId: number;
	readonly numRows: number;
	readonly numCols: number;
	readonly cellSize: number;
	readonly level: number;
	readonly linesUntilNextLevel: number;
	readonly activeBlock: IBlock | null;
	readonly score: number;
	readonly totalBlocks: number;
	readonly totalLinesCleared: number;
	readonly unclearedCells: ICell[];
	readonly isStarted: boolean;
	readonly isFinished: boolean;
	readonly isPaused: boolean;
}

export interface IStore {
	tetris: ITetrisState;
}
