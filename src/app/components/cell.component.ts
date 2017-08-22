import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICell} from '../interfaces/cell.interface';

@Component({
	selector: 'app-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="{{'app-cell app-cell-' + cell.type}}"
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
}
