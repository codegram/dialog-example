import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * A common component rendered as a Material dialog
 */
@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.component.scss'],
  template: `
    <div mat-dialog-content>
      <p class="dialog-paragraph">{{ data.headerText }}</p>
      <ng-container
        [ngTemplateOutlet]="data.template"
        [ngTemplateOutletContext]="data.context"
      ></ng-container>
    </div>
  `
})
export class DialogComponent<T> {
  /**
   * Initializes the component.
   *
   * @param dialogRef - A reference to the dialog opened.
   */
  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headerText: string;
      template: TemplateRef<any>;
      context: T;
    }
  ) {}
}
