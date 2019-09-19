# Service: primeng-confirmation-dialog

Dialogo de confirmación para Angular y PrimeNG.

_Leer en otro idioma: [Inglés](https://github.com/lfgarcia22/primeng-confirmation-dialog/blob/snapshot/README.md)_

## Requerimientos

* [Angular](https://angular.io/guide/quickstart)
* [PrimeNG](https://www.primefaces.org/primeng/#/setup)

## Instalación

1. Agregar el paquete a tu proyecto:

  ```
  npm install @von-development-studio/primeng-confirmation-dialog --save
  ```

2. Agrega el módulo _**ConfirmationDialogModule**_ y _**ConfirmationDialogService**_ en las secciones `imports` y `providers`

  ```typescript
  import { ConfirmationDialogModule, ConfirmationDialogService } from '@von-development-studio/primeng-confirmation-dialog';

  ...

  @NgModule({
    imports: [
      ...
      ConfirmationDialogModule,
      ...
    ],
    providers: [
      ...
      ConfirmationDialogService,
      ...
    ]
  })
  export class AppModule { }
  ```

## Uso

1. Agrega el servicion en el constructor:

  ```typescript
  import { ConfirmationDialogService } from '@von-development-studio/primeng-confirmation-dialog';
  
  constructor(
    ...
    private confirmationDialog: ConfirmationDialogService,
    ...
  ) { }
  ```

2. Llama el método `open` en el servicio con las configuraciones necesarias:

  ```typescript
  this.confirmationDialog.open<any>({
    save: of({})
  });
  ```

<hr>

###### _[By Von Development Studio](https://www.von-development-studio.com/)_
