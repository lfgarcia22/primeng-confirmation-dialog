import { ConfirmationDialogLocalizedMsg } from './confirmation-dialog.config-model';

const EN: ConfirmationDialogLocalizedMsg = {
  title: 'Confirmation',
  message: 'Are you sure?',
  success: 'Saved successfuly!',
  failure: 'Something went wrong!',
  save: 'Save',
  cancel: 'Cancel',
  close: 'Close'
};

const ES: ConfirmationDialogLocalizedMsg = {
  title: 'Confirmación',
  message: '¿Estás seguro de guardar?',
  success: '¡Se guardó correctamente!',
  failure: '¡Ups, Algo salió mal!',
  save: 'Guardar',
  cancel: 'Cancelar',
  close: 'Cerrar'
};

export const Messages = {
  en: EN,
  es: ES
};
