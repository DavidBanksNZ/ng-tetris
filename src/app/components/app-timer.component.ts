import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
	selector: 'app-timer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-timer"></div>
	`
})

export class TimerComponent implements OnChanges {

	@Input() level: number;
	@Input() isStarted: boolean;
	@Input() isFinished: boolean;
	@Input() isPaused: boolean;

	@Output() onTick = new EventEmitter<void>();

	private timer: any;
	private time: number;
	private partial = 0;
	private interval = 0;

	ngOnChanges(changes: SimpleChanges) {
		const {level, isStarted, isFinished, isPaused} = changes;

		if (isStarted.currentValue && !isStarted.previousValue) {
			this.resetTimer(this.level);
		} else if (isFinished.currentValue && !isFinished.previousValue) {
			this.stopTimer();
		} else if (isPaused.currentValue && !isPaused.previousValue) {
			this.stopTimer(true);
		} else if (!isPaused.currentValue && isPaused.previousValue) {
			this.resetTimer(this.level);
		} else if (level.currentValue !== level.previousValue && !isNaN(Number(level.previousValue))) {
			this.resetTimer(level.currentValue);
		}
	}

	private resetTimer (level: number): void {
		this.stopTimer();
		this.time = Date.now();
		this.interval = Math.max(1, 10 - level) * 50;
		this.timer = setTimeout(() => {
			this.tick();
			this.timer = setInterval(() => this.tick(), this.interval);
		}, this.partial);
	}

	private stopTimer(trackPartial = false): void {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
			this.partial = trackPartial ? this.interval - (Date.now() - this.time) : 0;
		}
	}

	private tick() {
		this.time = Date.now();
		this.onTick.emit();
	}

}
