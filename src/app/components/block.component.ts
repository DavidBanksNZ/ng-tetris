import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BlockType} from '../enums/blockType.enum';
import {BlockOrientation} from '../enums/blockOrientation.enum';

@Component({
	selector: 'app-block',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-block">
		</div>
	`
})

export class BlockComponent {
	@Input() readonly type: BlockType;
	@Input() readonly orientation: BlockOrientation;
	@Input() readonly position: number[];
}
