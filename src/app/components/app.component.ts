import {AfterViewInit, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {
	moveActiveBlockDown, moveActiveBlockLeft, moveActiveBlockRight, newGame, rotateActiveBlock,
	togglePause
} from '../state/actions';
import {IStore, ITetrisState} from '../state/state.interface';
import {TimerService} from '../providers/timer.provider';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<div *ngIf="state$ | async as state">

				<app-controls
					(onNew)="newGame()"
					(onPause)="togglePause()"
					[isStarted]="state.isStarted"
					[isFinished]="state.isFinished"
					[isTiming]="state.isTiming">
				</app-controls>

				<app-next-block
					[block]="state.nextBlock"
					[cellSize]="state.cellSize"
					[boardWidth]="state.numCols * (state.cellSize - 1) + 1">
				</app-next-block>

				<app-scoreboard
					[boardWidth]="state.numCols * (state.cellSize - 1) + 1"
					[level]="state.level"
					[lines]="state.linesUntilNextLevel"
					[score]="state.score">
				</app-scoreboard>

				<app-board
					[state]="state"
					(onMoveActiveBlockDown)="moveActiveBlockDown($event)"
					(onMoveActiveBlockLeft)="moveActiveBlockLeft($event)"
					(onMoveActiveBlockRight)="moveActiveBlockRight($event)"
					(onTogglePause)="togglePause()"
					(onNewGame)="newGame()"
					(onRotateActiveBlock)="rotateActiveBlock()">
				</app-board>

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

	public moveActiveBlockDown(allTheWay: boolean): void {
		this.store.dispatch(moveActiveBlockDown(false, allTheWay));
	}

	public moveActiveBlockLeft(allTheWay: boolean): void {
		this.store.dispatch(moveActiveBlockLeft(allTheWay));
	}

	public moveActiveBlockRight(allTheWay: boolean): void {
		this.store.dispatch(moveActiveBlockRight(allTheWay));
	}

	public rotateActiveBlock(): void {
		this.store.dispatch(rotateActiveBlock());
	}

}
