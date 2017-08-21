import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div class="app">
			<h1>Angular + Redux Tetris</h1>
			<app-board></app-board>
		</div>
	`
})
export class AppComponent {
}
