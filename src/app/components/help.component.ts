import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-help',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="app-help">
			<div class="app-help-modal-wrapper" *ngIf="isHelpModalOpen">
				<div class="app-help-modal">
					<button class="app-help-modal-close-btn" (click)="onHelpModalClose.emit()">&#215;</button>
					<h2>Controls</h2>
					<table>
						<tbody>
						<tr>
							<td>N</td>
							<td>New game</td>
						</tr>
						<tr>
							<td>P</td>
							<td>Pause game</td>
						</tr>
						<tr>
							<td>Spacebar</td>
							<td>Hard drop</td>
						</tr>
						<tr>
							<td>Down arrow</td>
							<td>Soft drop</td>
						</tr>
						<tr>
							<td>Up arrow / Z</td>
							<td>Rotate clockwise</td>
						</tr>
						<tr>
							<td>X</td>
							<td>Rotate anticlockwise</td>
						</tr>
						<tr>
							<td>Left arrow</td>
							<td>Move left</td>
						</tr>
						<tr>
							<td>Right arrow</td>
							<td>Move right</td>
						</tr>
						</tbody>
					</table>

					<h2>Scoring</h2>
					<table>
						<tbody>
						<tr>
							<td>Soft drop</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Hard drop</td>
							<td>2 x (cells dropped)</td>
						</tr>
						<tr>
							<td>Single line clear</td>
							<td>100 x (current level)</td>
						</tr>
						<tr>
							<td>Double line clear</td>
							<td>300 x (current level)</td>
						</tr>
						<tr>
							<td>Triple line clear</td>
							<td>500 x (current level)</td>
						</tr>
						<tr>
							<td>Tetris (Quad line clear)</td>
							<td>800 x (current level)</td>
						</tr>
						<tr>
							<td>Combo line clear</td>
							<td>50 x (# consecutive clears)</td>
						</tr>
						<tr>
							<td>Perfect clear (empty the board)</td>
							<td>1200 x (current level)</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	`
})

export class HelpComponent {
	@Input() isHelpModalOpen: boolean;
	@Output() onHelpModalClose = new EventEmitter<void>();
}
