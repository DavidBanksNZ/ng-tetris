import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore, ITetrisState} from '../state/state.interface';
import {Observable} from 'rxjs/Observable';
import {newGame, togglePause} from '../state/actions';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<app-controls (onNew)="newGame()" (onPause)="togglePause()"></app-controls>
			<app-board [state]="state$ | async"></app-board>
		</div>
	`
})
export class AppComponent {

	public state$: Observable<ITetrisState>;

	constructor(private store: Store<IStore>) {
		this.state$ = store.select(state => state.tetris);
	}

	public newGame(): void {
		this.store.dispatch(newGame());
	}

	public togglePause(): void {
		this.store.dispatch(togglePause());
	}

}
