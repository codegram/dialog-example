import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

// Components
import { DialogComponent } from '../components/dialog/dialog.component';

// Models
import { DialogData } from '../models/dialog-data.model';
import { DialogOptions } from '../models/dialog-options.model';

// Services
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class DialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog) {}

  open(
    dialogData: DialogData<T>,
    options: DialogOptions = { width: 500, disableClose: true }
  ): DialogService<T> {
    const dialogRef = this.dialog.open<DialogComponent<T>, DialogData<T>>(
      DialogComponent,
      {
        ...this.fetchOptions(options),
        data: dialogData
      }
    );

    dialogRef.afterClosed().pipe(first());

    return new DialogService(dialogRef);
  }

  private fetchOptions({
    width,
    disableClose
  }: DialogOptions): Pick<
    MatDialogConfig<DialogData<T>>,
    'width' | 'disableClose'
  > {
    return {
      width: `${width}px`,
      disableClose
    };
  }
}
