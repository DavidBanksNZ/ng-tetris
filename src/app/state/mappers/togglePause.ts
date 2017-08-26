import {Action} from '@ngrx/store';
import {ITetrisState} from '../state.interface';

export function togglePauseMapper(state: ITetrisState, action: Action): ITetrisState {
	if (state.isTiming) {
		// Now pausing
		const timestamp = Date.now();
		return {
			...state,
			partial: (state.partial || state.interval) - (timestamp - state.timestamp),
			// timestamp,
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
