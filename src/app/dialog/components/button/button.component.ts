import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-button',
  styleUrls: ['button.component.scss'],
  template: `
    <button mat-raised-button [color]="color" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() color = 'default';
  @Input() disabled = false;
}
