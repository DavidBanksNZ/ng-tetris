import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/takeUntil';

import {IStore} from '../state/state.interface';
import {softDrop} from '../state/actions';

@Injectable()
export class TimerService {

	constructor(private store: Store<IStore>) {}

	init(): void {

		const [isTiming$, isNotTiming$] = this.store.select(state => state.tetris.isTiming)
			.partition(value => value);

		const partialInterval$ = this.store.select(state => state.tetris.partialInterval);
		const interval$ = this.store.select(state => state.tetris.interval);

		isTiming$
			.combineLatest(interval$, (isTiming, interval) => interval)
			.withLatestFrom(partialInterval$)
			.switchMap(([interval, partialInterval]) => {
				return Observable.timer(partialInterval, interval)
					.takeUntil(isNotTiming$);
			})
			.subscribe(() => {
				this.store.dispatch(softDrop(true));
			});

	}

}
