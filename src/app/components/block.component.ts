import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBlock} from '../interfaces/block.interface';

@Component({
	selector: 'app-block',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<app-cell
			*ngFor="let cell of block.cells"
			[cell]="cell"
			[size]="cellSize"
		></app-cell>
	`
})

export class BlockComponent {
	@Input() readonly block: IBlock;
	@Input() readonly cellSize: number;
}
