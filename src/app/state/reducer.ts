import {ITetrisState} from './state.interface';
import {Action} from '@ngrx/store';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {BlockType} from '../enums/blockType.enum';


const INITIAL_STATE: ITetrisState = {
	numRows: 20,
	numCols: 10,
	cellSize: 36,
	level: 0,
	linesUntilNextLevel: 10,
	activeBlockType: BlockType.Pyramid,
	activeBlockPosition: [],
	activeBlockOrientation: BlockOrientation.Normal,
	score: 0,
	totalBlocks: 0,
	totalLinesCleared: 0,
	unclearedCells: [
		{row: 5, column: 5, type: BlockType.Pyramid},
		{row: 14, column: 1, type: BlockType.Square},
		{row: 12, column: 8, type: BlockType.ZigZag},
		{row: 2, column: 7, type: BlockType.L}
	]
};


export function tetrisReducer(state: ITetrisState = INITIAL_STATE, action: Action) {

	switch(action.type) {
		default:
			return state;
	}

}
