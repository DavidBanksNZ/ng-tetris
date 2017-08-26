import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
	selector: 'app-timer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-timer" [style.left]="(boardWidth + 20) + 'px'">
			<div class="app-timer-box app-timer-box-score">
				<div class="app-timer-box-label">Score</div>
				<div class="app-timer-box-value">{{score}}</div>
			</div>
			<div class="app-timer-box app-timer-box-level">
				<div class="app-timer-box-label">Level</div>
				<div class="app-timer-box-value">{{level}}</div>
			</div>
			<div class="app-timer-box app-timer-box-lines">
				<div class="app-timer-box-label">Lines until next level</div>
				<div class="app-timer-box-value">{{lines}}</div>
			</div>
		</div>
	`
})

export class TimerComponent implements OnChanges {

	@Input() boardWidth: number;
	@Input() lines: number;
	@Input() score: number;
	@Input() level: number;
	@Input() isStarted: boolean;
	@Input() isFinished: boolean;
	@Input() isPaused: boolean;
	@Input() gameId: boolean;

	@Output() onTick = new EventEmitter<void>();

	private timer: any;
	private time: number;
	private partial = 0;
	private interval = 0;

	ngOnChanges(changes: SimpleChanges) {
		const {level, isStarted, isFinished, isPaused, gameId} = changes;

		if (gameId && gameId.currentValue !== gameId.previousValue && !gameId.isFirstChange()) {
			this.partial = 0;
			this.resetTimer(this.level);
		} else if (isStarted && isStarted.currentValue && !isStarted.previousValue) {
			this.resetTimer(this.level);
		} else if (isFinished && isFinished.currentValue && !isFinished.previousValue) {
			this.stopTimer();
		} else if (isPaused && isPaused.currentValue && !isPaused.previousValue) {
			this.stopTimer(true);
		} else if (isPaused && !isPaused.currentValue && isPaused.previousValue) {
			this.resetTimer(this.level);
		} else if (level && level.currentValue !== level.previousValue && !isNaN(Number(level.previousValue))) {
			this.resetTimer(level.currentValue);
		}
	}

	private resetTimer (level: number): void {
		this.stopTimer();
		this.time = Date.now();
		this.interval = Math.max(1, 10 - level) * 50;
		this.timer = setTimeout(() => {
			this.partial = 0;
			this.tick();
			this.timer = setInterval(() => this.tick(), this.interval);
		}, this.partial);
	}

	private stopTimer(trackPartial = false): void {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
			if (this.partial === 0) {
				// If partial time is zero, no timeout pending
				this.partial = trackPartial ? this.interval - (Date.now() - this.time) : 0;
			} else {
				// This scenario occurs when game is paused too fast after the last resume
				// for the previous partial timeout to run. When this happens, decrement the
				// partial value by how much time elapsed.
				this.partial -= (Date.now() - this.time);
			}
		}
	}

	private tick() {
		this.time = Date.now();
		this.onTick.emit();
	}

}
