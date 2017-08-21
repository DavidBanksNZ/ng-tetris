import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './components/app.component';
import {BoardComponent} from './components/board.component';
import {tetrisReducer} from './state/reducer';
import {CellComponent} from './components/cell.component';
import {BlockComponent} from './components/block.component';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		CellComponent,
		BlockComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({tetris: tetrisReducer})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
