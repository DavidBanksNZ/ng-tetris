import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITetromino} from '../interfaces/tetromino.interface';
import {ICell} from '../interfaces/cell.interface';

@Component({
	selector: 'app-tetromino',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<app-cell
			*ngFor="let cell of tetromino?.cells"
			[cell]="cell"
			[size]="cellSize"
		></app-cell>
	`
})

export class TetrominoComponent {
	@Input() readonly tetromino: ITetromino;
	@Input() readonly cellSize: number;
}
