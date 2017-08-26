import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
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
			<app-block [block]="state.activeBlock" [cellSize]="state.cellSize"></app-block>
		</div>
	`
})
export class BoardComponent {

	@Input() state: ITetrisState;

	@Output() onMoveActiveBlockLeft = new EventEmitter<boolean>();
	@Output() onMoveActiveBlockRight = new EventEmitter<boolean>();
	@Output() onMoveActiveBlockDown = new EventEmitter<boolean>();
	@Output() onRotateActiveBlock = new EventEmitter<void>();

	@HostListener('document:keydown', ['$event'])
	onKeyUp($event) {
		if (this.state.isStarted && !this.state.isFinished && this.state.isTiming) {
			switch ($event.keyCode) {
				case 37:
					this.onMoveActiveBlockLeft.emit($event.shiftKey);
					break;
				case 39:
					this.onMoveActiveBlockRight.emit($event.shiftKey);
					break;
				case 38:
					this.onRotateActiveBlock.emit();
					break;
				case 40:
					this.onMoveActiveBlockDown.emit($event.shiftKey);
					break;
			}
		}
	}


	get width(): number {
		return this.state.numCols * (this.state.cellSize - 1) + 1;
	}

	get height(): number {
		return this.state.numRows * (this.state.cellSize - 1) + 1;
	}

}
