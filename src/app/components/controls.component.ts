import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-controls',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-controls">
			<button type="button" (click)="newGameBtnClicked($event)">New Game</button>
			<button
				type="button"
				[disabled]="!isStarted || isFinished"
				(click)="pauseBtnClicked($event)"
			>{{isPaused ? 'Resume Game' : 'Pause Game'}}</button>
		</div>
	`
})

export class ControlsComponent {
	@Input() isStarted: boolean;
	@Input() isFinished: boolean;
	@Input() isTiming: boolean;

	@Output() onNew = new EventEmitter<void>();
	@Output() onPause = new EventEmitter<void>();

	get isPaused(): boolean {
		return this.isStarted && !this.isFinished && !this.isTiming;
	}

	pauseBtnClicked($event): void {
		this.onPause.emit();
		$event.target.blur();
	}

	newGameBtnClicked($event): void {
		this.onNew.emit();
		$event.target.blur();
	}
}
