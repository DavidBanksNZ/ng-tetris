import {IState} from './state.interface';
import {Action} from '@ngrx/store';
import {BlockOrientation} from '../enums/blockOrientation.enum';
import {BlockType} from '../enums/blockType.enum';


const INITIAL_STATE: IState = {
	numRows: 30,
	numCols: 10,
	level: 0,
	linesUntilNextLevel: 10,
	activeBlockType: BlockType.Pyramid,
	activeBlockPosition: [],
	activeBlockOrientation: BlockOrientation.Normal,
	score: 0,
	totalBlocks: 0,
	totalLinesCleared: 0,
	unclearedCells: []
};


export function tetrisReducer(state: IState = INITIAL_STATE, action: Action) {

	switch(action.type) {
		default:
			return state;
	}

}
