import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICell} from '../interfaces/cell.interface';
import {TetrominoType} from '../enums/tetromino.enum';

@Component({
	selector: 'app-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="{{'app-cell app-cell-' + cellClass}}"
			[style.width]="size + 'px'"
			[style.height]="size + 'px'"
			[style.left]="cell.column * (size - 1) + 'px'"
			[style.top]="cell.row * (size - 1) + 'px'"
		></div>
	`
})
export class CellComponent {
	@Input() readonly cell: ICell;
	@Input() readonly size: number;
	@Input() readonly isGhost: boolean;

	get cellClass(): 'ghost' | TetrominoType {
		return this.isGhost ? 'ghost' : this.cell.type;
	}
}
