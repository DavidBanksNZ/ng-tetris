import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './components/app.component';
import {BoardComponent} from './components/board.component';
import {tetrisReducer} from './state/reducer';
import {CellComponent} from './components/cell.component';
import {TetrominoComponent} from './components/tetromino';
import {ControlsComponent} from './components/controls.component';
import {TimerComponent} from './components/scoreboard.component';
import {NextBlockComponent} from './components/next-tetromino.component';
import {TimerService} from './providers/timer.provider';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		CellComponent,
		TetrominoComponent,
		ControlsComponent,
		TimerComponent,
		NextBlockComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({tetris: tetrisReducer})
	],
	providers: [TimerService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
