import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { Messages } from './confirmation-dialog.config-constants';
import { ConfirmationDialogConfig } from './confirmation-dialog.config-model';

@Injectable()
export class ConfirmationDialogService {

  constructor(
    private dialogService: DialogService
  ) { }

  public open = <T>(config: ConfirmationDialogConfig<T>): DynamicDialogRef => {
    let localizedMsg = Messages.en;
    if (config.localization && config.localization.toLowerCase() === 'es') {
      localizedMsg = Messages.es;
    }
    if (config.custom) {
      localizedMsg = {
        ...localizedMsg,
        ...config.custom
      };
    }

    return this.dialogService.open(ConfirmationDialogComponent, {
      header: localizedMsg.title,
      data: {
        messages: localizedMsg,
        save: config.save
      },
      style: {
        maxHeight: '50%'
      },
      closeOnEscape: true,
      width: '35%'
    });
  }

}
