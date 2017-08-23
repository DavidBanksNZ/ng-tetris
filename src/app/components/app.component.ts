import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore, ITetrisState} from '../state/state.interface';
import {Observable} from 'rxjs/Observable';
import {moveActiveBlockDown, newGame, togglePause} from '../state/actions';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<app-controls
				(onNew)="newGame()"
				(onPause)="togglePause()"
				[isStarted]="(state$ | async).isStarted"
				[isPaused]="(state$ | async).isPaused"
			></app-controls>
			<app-timer
				[level]="(state$ | async).level"
				[isStarted]="(state$ | async).isStarted"
				[isPaused]="(state$ | async).isPaused"
				[isFinished]="(state$ | async).isFinished"
				(onTick)="tick()"
			></app-timer>
			<app-board [state]="state$ | async"></app-board>
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
		this.store.dispatch(moveActiveBlockDown());
	}

}
