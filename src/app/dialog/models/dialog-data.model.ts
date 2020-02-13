import { TemplateRef } from '@angular/core';

export interface DialogData<T = undefined> {
  headerText: string;
  template: TemplateRef<any>;
  context?: T;
}
