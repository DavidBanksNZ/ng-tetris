import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';

import {IStore} from '../state/state.interface';
import {moveActiveBlockDown} from '../state/actions';

@Injectable()
export class TimerService {

	private timer: any;

	constructor(private store: Store<IStore>) {}

	init(): void {
		const partial$ = this.store.select(state => state.tetris.partial);
		const timestamp$ = this.store.select(state => state.tetris.timestamp);
		const interval$ = this.store.select(state => state.tetris.interval);

		this.store.select(state => state.tetris.isTiming)
			.distinctUntilChanged()
			.withLatestFrom(
				partial$, timestamp$, interval$,
				(isTiming, partial, timestamp, interval) => ({isTiming, partial, timestamp, interval})
			)
			.subscribe(({isTiming, partial, timestamp, interval}) => {
				if (isTiming) {
					this.timer = setTimeout(() => {
						this.tick();
						this.timer = setInterval(() => this.tick(), interval);
					}, partial);
				} else {
					if (this.timer) {
						clearInterval(this.timer);
					}
				}
			});
	}

	private tick() {
		this.store.dispatch(moveActiveBlockDown(false));
	}
}
