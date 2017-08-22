import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore, ITetrisState} from '../state/state.interface';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<app-board [state]="state$ | async"></app-board>
		</div>
	`
})
export class AppComponent {

	public state$: Observable<ITetrisState>;

	constructor(private store: Store<IStore>) {
		this.state$ = store.select(state => state.tetris);
	}

}
