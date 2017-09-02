import {AfterViewInit, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {
	hardDrop, moveActiveTetrominoLeft, moveActiveTetrominoRight, newGame, rotateActiveTetromino,
	softDrop, toggleHelpModal, togglePause
} from '../state/actions';
import {IStore, ITetrisState} from '../state/state.interface';
import {TimerService} from '../providers/timer.provider';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<div *ngIf="state$ | async as state" class="app-container">

				<app-board
					[state]="state"
					(onSoftDrop)="softDrop()"
					(onHardDrop)="hardDrop()"
					(onMoveLeft)="moveLeft()"
					(onMoveRight)="moveRight()"
					(onTogglePause)="togglePause()"
					(onNewGame)="newGame()"
					(onRotate)="rotate($event)">
				</app-board>

				<div class="app-side-panel">
					<app-controls
						(onNew)="newGame()"
						(onPause)="togglePause()"
						(onHelpBtnClick)="toggleHelpModal(true)"
						[isStarted]="state.isStarted"
						[isFinished]="state.isFinished"
						[isTiming]="state.isTiming">
					</app-controls>

					<app-next-tetromino
						[tetromino]="state.nextTetromino"
						[cellSize]="state.cellSize">
					</app-next-tetromino>

					<app-scoreboard
						[level]="state.level"
						[lines]="state.linesUntilNextLevel"
						[score]="state.score">
					</app-scoreboard>
				</div>

				<app-help
					[isHelpModalOpen]="state.isHelpModalOpen"
					(onHelpModalClose)="toggleHelpModal(false)">
				</app-help>

			</div>

			<div class="app-footer">
				<p>Built by David Banks. <a href="https://github.com/DavidBanksNZ/ng-tetris/">GitHub Repo</a></p>
			</div>
		</div>
	`
})
export class AppComponent implements AfterViewInit {

	public state$: Observable<ITetrisState>;

	constructor(private store: Store<IStore>, private timer: TimerService) {
		this.state$ = store.select(state => state.tetris);
	}

	ngAfterViewInit() {
		this.timer.init();
	}

	newGame(): void {
		this.store.dispatch(newGame());
	}

	togglePause(): void {
		this.store.dispatch(togglePause());
	}

	softDrop(): void {
		this.store.dispatch(softDrop(false));
	}

	hardDrop(): void {
		this.store.dispatch(hardDrop());
	}

	moveLeft(): void {
		this.store.dispatch(moveActiveTetrominoLeft());
	}

	moveRight(): void {
		this.store.dispatch(moveActiveTetrominoRight());
	}

	rotate(isClockwise: boolean): void {
		this.store.dispatch(rotateActiveTetromino(isClockwise));
	}

	toggleHelpModal(state: boolean): void {
		this.store.dispatch(toggleHelpModal(state));
	}

}
