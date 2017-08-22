import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBlock} from '../interfaces/block.interface';

@Component({
	selector: 'app-block',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-block">
		</div>
	`
})

export class BlockComponent {
	@Input() readonly block: IBlock;
}
