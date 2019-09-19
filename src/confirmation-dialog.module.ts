import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmationDialogComponent } from './lib/confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    ConfirmationDialogComponent
  ],
  providers: [
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class ConfirmationDialogModule { }
