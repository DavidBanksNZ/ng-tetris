import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {BoardComponent} from './board.component';
import {tetrisReducer} from './state/reducer';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent
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
