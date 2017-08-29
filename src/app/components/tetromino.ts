import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITetromino} from '../interfaces/tetromino.interface';
import {ICell} from '../interfaces/cell.interface';

@Component({
	selector: 'app-tetromino',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<app-cell
			*ngFor="let cell of cells"
			[cell]="cell"
			[size]="cellSize"
			[isGhost]="isGhost"
		></app-cell>
	`
})

export class TetrominoComponent {
	@Input() readonly cells: ICell[];
	@Input() readonly cellSize: number;
	@Input() readonly isGhost: boolean;
}
