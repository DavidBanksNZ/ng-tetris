import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-help',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-help">
			<button type="button" (click)="onHelpBtnClick.emit()">Help</button>
		</div>
	`
})

export class HelpComponent {
	@Input() isHelpOpen: boolean;
	@Output() onHelpBtnClick = new EventEmitter<void>();
}
