import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBlock} from '../interfaces/block.interface';
import {centerBlock} from '../helpers/centerBlock';
import {offsetBlock} from '../helpers/offsetBlock';

@Component({
	selector: 'app-next-block',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="app-next-block-wrapper"
			[style.height]="(6 * cellSize) + 'px'"
		>
			<div class="app-next-block-label">Next Block</div>
			<div
				class="app-next-block"
				[style.width]="3 * cellSize + 'px'"
				[style.height]="4 * cellSize + 'px'"
				[style.top]="0.5 * (4 - rowSpan) * cellSize + 'px'"
			>
				<app-block [block]="adjustBlockPosition(block)" [cellSize]="cellSize"></app-block>
			</div>
		</div>
	`
})

export class NextBlockComponent {

	@Input() block: IBlock | null;
	@Input() cellSize: number;

	get rowSpan(): number {
		if (this.block === null) {
			return 0;
		}
		const rows = this.block.cells.map(c => c.row);
		return Math.max(...rows) - Math.min(...rows) + 1;
	}

	adjustBlockPosition(block: IBlock | null): IBlock | null {
		if (block === null) {
			return block;
		}
		const rowSpan = this.rowSpan;
		return offsetBlock(centerBlock(block, 3, false), 0, rowSpan, rowSpan, 3);
	}

}
