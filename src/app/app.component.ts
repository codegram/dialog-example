import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DialogService } from './dialog/services/dialog.service';
import { DialogFactoryService } from './dialog/services/dialog-factory.service';
import { DialogData } from './dialog/models/dialog-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog-example';

  dialog: DialogService;
  @ViewChild('firstDialogTemplate')
  firstDialogTemplate: TemplateRef<any>;

  @ViewChild('secondDialogTemplate')
  secondDialogTemplate: TemplateRef<any>;

  @ViewChild('loaderDialogTemplate')
  loaderDialogTemplate: TemplateRef<any>;

  constructor(private dialogFactoryService: DialogFactoryService) {}

  dispatchDialog() {
    this.openDialog({
      headerText: 'Here is our dialog',
      template: this.firstDialogTemplate
    });
  }

  changeDialogTemplate(template: TemplateRef<any>) {
    this.dialog.setTemplate(this.loaderDialogTemplate);
    setTimeout(() => {
      this.dialog.setTemplate(template);
    }, 3000);
  }

  closeDialog() {
    this.dialog.close();
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData);
  }
}
