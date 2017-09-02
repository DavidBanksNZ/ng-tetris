import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ITetrisState} from '../state/state.interface';

@Component({
	selector: 'app-board',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="app-board"
			[class.app-board-paused]="isPaused"
			[style.width]="width + 'px'"
			[style.height]="height + 'px'"
		>
			<app-tetromino
				[cells]="state.ghostCells"
				[cellSize]="state.cellSize"
				[isGhost]="true">
			</app-tetromino>

			<app-cell
				*ngFor="let cell of state.unclearedCells; trackBy: unclearedCellsTrackBy"
				[cell]="cell"
				[size]="state.cellSize">
			</app-cell>

			<app-tetromino
				[cells]="state.activeTetromino?.cells"
				[cellSize]="state.cellSize"
				[isGhost]="false">
			</app-tetromino>

			<div class="app-paused-banner" *ngIf="isPaused">Game Paused</div>
		</div>
	`
})
export class BoardComponent {

	@Input() state: ITetrisState;

	@Output() onMoveLeft = new EventEmitter<void>();
	@Output() onMoveRight = new EventEmitter<void>();
	@Output() onSoftDrop = new EventEmitter<void>();
	@Output() onRotate = new EventEmitter<boolean>();
	@Output() onHardDrop = new EventEmitter<void>();
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
					this.onMoveLeft.emit();
					break;
				case 39:
					// Right arrow key
					this.onMoveRight.emit();
					break;
				case 38:
				case 90:
					// Up arrow key, z key
					this.onRotate.emit(true);
					break;
				case 88:
					// Up arrow key, x key
					this.onRotate.emit(false);
					break;
				case 40:
					// Down arrow key
					this.onSoftDrop.emit();
					break;
				case 32:
					// Space bar
					this.onHardDrop.emit();
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

	unclearedCellsTrackBy(index) {
		return index;
	}

	get isPaused(): boolean {
		return this.state.isStarted && !this.state.isFinished && !this.state.isTiming;
	}

}
