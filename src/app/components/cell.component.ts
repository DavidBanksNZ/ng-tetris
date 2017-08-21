import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BlockType} from '../enums/blockType.enum';

@Component({
	selector: 'app-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="{{'app-cell app-cell-' + type}}"></div>
	`
})

export class CellComponent {
	@Input() readonly type: BlockType;
}
