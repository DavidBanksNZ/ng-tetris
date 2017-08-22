import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITetrisState} from '../state/state.interface';

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
		</div>
	`
})
export class BoardComponent {

	@Input() state: ITetrisState;

	get width(): number {
		return this.state.numCols * this.state.cellSize;
	}

	get height(): number {
		return this.state.numRows * this.state.cellSize;
	}

}
