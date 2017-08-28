import {AfterViewInit, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {
	moveActiveTetrominoDown, moveActiveTetrominoLeft, moveActiveTetrominoRight, newGame, rotateActiveTetromino,
	togglePause
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
					(onMoveActiveTetrominoDown)="moveActiveTetrominoDown($event)"
					(onMoveActiveTetrominoLeft)="moveActiveTetrominoLeft($event)"
					(onMoveActiveTetrominoRight)="moveActiveTetrominoRight($event)"
					(onTogglePause)="togglePause()"
					(onNewGame)="newGame()"
					(onRotateActiveTetromino)="rotateActiveTetromino()">
				</app-board>

				<div class="app-side-panel">
					<app-controls
						(onNew)="newGame()"
						(onPause)="togglePause()"
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

	public newGame(): void {
		this.store.dispatch(newGame());
	}

	public togglePause(): void {
		this.store.dispatch(togglePause());
	}

	public moveActiveTetrominoDown(allTheWay: boolean): void {
		this.store.dispatch(moveActiveTetrominoDown(false, allTheWay));
	}

	public moveActiveTetrominoLeft(allTheWay: boolean): void {
		this.store.dispatch(moveActiveTetrominoLeft(allTheWay));
	}

	public moveActiveTetrominoRight(allTheWay: boolean): void {
		this.store.dispatch(moveActiveTetrominoRight(allTheWay));
	}

	public rotateActiveTetromino(): void {
		this.store.dispatch(rotateActiveTetromino());
	}

}
