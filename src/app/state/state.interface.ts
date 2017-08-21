import {BlockType} from '../enums/blockType.enum';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {ICell} from '../interfaces/cell.interface';

export interface IState {
	readonly numRows: number;
	readonly numCols: number;
	readonly level: number;
	readonly linesUntilNextLevel: number;
	readonly activeBlockType: BlockType;
	readonly activeBlockPosition: number[];
	readonly activeBlockOrientation: BlockOrientation;
	readonly score: number;
	readonly totalBlocks: number;
	readonly totalLinesCleared: number;
	readonly unclearedCells: ICell[];
}
