import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITetrisState} from '../state/state.interface';
import {generateBlock} from '../helpers/generateBlock';
import {BlockType} from '../enums/blockType.enum';
import {offsetBlock} from '../helpers/offsetBlock';

@Component({
	selector: 'app-board',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="app-board"
			[style.width]="width + 'px'"
			[style.height]="height + 'px'"
		>
			<app-cell
				*ngFor="let cell of state.unclearedCells"
				[cell]="cell"
				[size]="state.cellSize"
			></app-cell>
			<app-block [block]="block" [cellSize]="state.cellSize"></app-block>
		</div>
	`
})
export class BoardComponent {

	@Input() state: ITetrisState;

	public block = offsetBlock(generateBlock(BlockType.ZigZag), 4, 0, 20, 10);

	get width(): number {
		return this.state.numCols * (this.state.cellSize - 1) + 1;
	}

	get height(): number {
		return this.state.numRows * (this.state.cellSize - 1) + 1;
	}

}
