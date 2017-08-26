import {Action} from '@ngrx/store';
import {ITetrisState} from '../state.interface';

export function togglePauseMapper(state: ITetrisState, action: Action): ITetrisState {
	if (state.isTiming) {
		// Now pausing
		return {
			...state,
			partialInterval: (state.partialInterval || state.interval) - (Date.now() - state.timestamp),
			isTiming: false
		};
	} else {
		// Now resuming
		return {
			...state,
			isTiming: true,
			timestamp: Date.now()
		};
	}
}
