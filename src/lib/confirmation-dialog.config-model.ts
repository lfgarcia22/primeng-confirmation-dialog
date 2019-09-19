import { Observable } from 'rxjs';

export interface ConfirmationDialogConfig<T> {
  save: Observable<T>;
  custom?: {
    title?: string;
    message?: string;
    success?: string;
    failure?: string;
    save?: string;
    cancel?: string;
    close?: string;
  };
  localization?: string;
}

export interface ConfirmationDialogLocalizedMsg {
  title: string;
  message: string;
  success: string;
  failure: string;
  save: string;
  cancel: string;
  close: string;
}
