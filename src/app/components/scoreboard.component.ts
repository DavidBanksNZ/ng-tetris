import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-scoreboard',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-scoreboard" [style.left]="(boardWidth + 20) + 'px'">
			<div class="app-scoreboard-box app-scoreboard-box-score">
				<div class="app-scoreboard-box-label">Score</div>
				<div class="app-scoreboard-box-value">{{score}}</div>
			</div>
			<div class="app-scoreboard-box app-scoreboard-box-level">
				<div class="app-scoreboard-box-label">Level</div>
				<div class="app-scoreboard-box-value">{{level}}</div>
			</div>
			<div class="app-scoreboard-box app-scoreboard-box-lines">
				<div class="app-scoreboard-box-label">Lines until next level</div>
				<div class="app-scoreboard-box-value">{{lines}}</div>
			</div>
		</div>
	`
})

export class TimerComponent {

	@Input() boardWidth: number;
	@Input() lines: number;
	@Input() score: number;
	@Input() level: number;

}
