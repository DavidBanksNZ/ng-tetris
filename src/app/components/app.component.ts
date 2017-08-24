import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore, ITetrisState} from '../state/state.interface';
import {Observable} from 'rxjs/Observable';
import {moveActiveBlockDown, moveActiveBlockLeft, moveActiveBlockRight, newGame, togglePause} from '../state/actions';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<app-controls
				(onNew)="newGame()"
				(onPause)="togglePause()"
				[isStarted]="(state$ | async).isStarted"
				[isPaused]="(state$ | async).isPaused">
			</app-controls>
			<app-timer
				[level]="(state$ | async).level"
				[isStarted]="(state$ | async).isStarted"
				[isPaused]="(state$ | async).isPaused"
				[isFinished]="(state$ | async).isFinished"
				[gameId]="(state$ | async).gameId"
				(onTick)="tick()">
			</app-timer>
			<app-board
				[state]="state$ | async"
				(onMoveActiveBlockDown)="moveActiveBlockDown($event)"
				(onMoveActiveBlockLeft)="moveActiveBlockLeft($event)"
				(onMoveActiveBlockRight)="moveActiveBlockRight($event)"
				(onRotateActiveBlock)="rotateActiveBlock($event)">
			</app-board>
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
		console.log(allTheWay ? 'All the way down!' : 'One block down');
		this.store.dispatch(moveActiveBlockDown(allTheWay));
	}

	public moveActiveBlockLeft(allTheWay: boolean): void {
		console.log(allTheWay ? 'All the way left!' : 'One block left');
		this.store.dispatch(moveActiveBlockLeft(allTheWay));
	}

	public moveActiveBlockRight(allTheWay: boolean): void {
		console.log(allTheWay ? 'All the way right!' : 'One block right');
		this.store.dispatch(moveActiveBlockRight(allTheWay));
	}

	public rotateActiveBlock(): void {
		console.log('rotate!');
	}

}
