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
			<app-tetromino [tetromino]="state.activeTetromino" [cellSize]="state.cellSize"></app-tetromino>
		</div>
	`
})
export class BoardComponent {

	@Input() state: ITetrisState;

	@Output() onMoveActiveTetrominoLeft = new EventEmitter<boolean>();
	@Output() onMoveActiveTetrominoRight = new EventEmitter<boolean>();
	@Output() onMoveActiveTetrominoDown = new EventEmitter<boolean>();
	@Output() onRotateActiveTetromino = new EventEmitter<void>();
	@Output() onTogglePause = new EventEmitter<void>();
	@Output() onNewGame = new EventEmitter<void>();

	@HostListener('document:keydown', ['$event'])
	onKeyUp($event) {
		if ($event.keyCode === 78) {
			// N - new game
			this.onNewGame.emit();
			return;
		}

		if ($event.keyCode === 80 && this.state.isStarted && !this.state.isFinished) {
			// P - toggle pause
			this.onTogglePause.emit();
			return;
		}

		if (this.state.isStarted && !this.state.isFinished && this.state.isTiming) {
			switch ($event.keyCode) {
				case 37:
					// Left arrow key
					this.onMoveActiveTetrominoLeft.emit($event.shiftKey);
					break;
				case 39:
					// Right arrow key
					this.onMoveActiveTetrominoRight.emit($event.shiftKey);
					break;
				case 38:
					// Up arrow key
					this.onRotateActiveTetromino.emit();
					break;
				case 40:
					// Down arrow key
					this.onMoveActiveTetrominoDown.emit($event.shiftKey);
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
