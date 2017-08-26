import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore, ITetrisState} from '../state/state.interface';
import {Observable} from 'rxjs/Observable';
import {
	moveActiveBlockDown, moveActiveBlockLeft, moveActiveBlockRight, newGame, rotateActiveBlock,
	togglePause
} from '../state/actions';

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
					[isPaused]="state.isPaused">
				</app-controls>
				<app-timer
					[level]="state.level"
					[isStarted]="state.isStarted"
					[isPaused]="state.isPaused"
					[isFinished]="state.isFinished"
					[gameId]="state.gameId"
					(onTick)="tick()">
				</app-timer>
				<app-board
					[state]="state"
					(onMoveActiveBlockDown)="moveActiveBlockDown($event)"
					(onMoveActiveBlockLeft)="moveActiveBlockLeft($event)"
					(onMoveActiveBlockRight)="moveActiveBlockRight($event)"
					(onRotateActiveBlock)="rotateActiveBlock()">
				</app-board>
			</div>
		</div>
	`
})
export class AppComponent {

	public state$: Observable<ITetrisState>;
	private timer: any;

	constructor(private store: Store<IStore>) {
		this.state$ = store.select(state => state.tetris);
	}

	public newGame(): void {
		this.store.dispatch(newGame());
	}

	public togglePause(): void {
		this.store.dispatch(togglePause());
	}

	public tick(): void {
		this.store.dispatch(moveActiveBlockDown(false));
	}

	public moveActiveBlockDown(allTheWay: boolean): void {
		this.store.dispatch(moveActiveBlockDown(allTheWay));
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
