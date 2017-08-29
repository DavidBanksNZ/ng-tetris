import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITetromino} from '../interfaces/tetromino.interface';
import {centerTetromino} from '../helpers/centerTetromino';
import {offsetTetromino} from '../helpers/offsetTetromino';

@Component({
	selector: 'app-next-tetromino',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="app-next-tetromino-wrapper"
			[style.height]="(6 * cellSize) + 'px'"
		>
			<div class="app-next-tetromino-label">Next Tetromino</div>
			<div
				class="app-next-tetromino"
				[style.width]="3 * cellSize + 'px'"
				[style.height]="4 * cellSize + 'px'"
				[style.top]="0.5 * (4 - rowSpan) * cellSize + 'px'"
			>
				<app-tetromino
					[cells]="adjustTetrominoPosition(tetromino).cells"
					[cellSize]="cellSize"
					[isGhost]="false">
				</app-tetromino>
			</div>
		</div>
	`
})

export class NextTetrominoComponent {

	@Input() tetromino: ITetromino | null;
	@Input() cellSize: number;

	get rowSpan(): number {
		if (this.tetromino === null) {
			return 0;
		}
		const rows = this.tetromino.cells.map(c => c.row);
		return Math.max(...rows) - Math.min(...rows) + 1;
	}

	adjustTetrominoPosition(tetromino: ITetromino | null): ITetromino | null {
		if (tetromino === null) {
			return tetromino;
		}
		const rowSpan = this.rowSpan;
		return offsetTetromino(centerTetromino(tetromino, 3, false), 0, rowSpan, rowSpan, 3);
	}

}
