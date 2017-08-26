import {Action} from '@ngrx/store';
import {ITetrisState} from '../state.interface';

export function togglePauseMapper(state: ITetrisState, action: Action): ITetrisState {
	if (!state.isTiming) {
		return {
			...state,
			partial: state.interval - (Date.now() - state.timestamp),
			timestamp: Date.now(),
			isTiming: true
		};
	} else {
		return {
			...state,
			isTiming: false
		};
	}
}
