# Service: primeng-confirmation-dialog

Confirmation Dialog for Angular and PrimeNG.

_Read this in other language: [Spanish](https://github.com/lfgarcia22/primeng-confirmation-dialog/blob/snapshot/README.es.md)_

## Requirements

* [Angular](https://angular.io/guide/quickstart)
* [PrimeNG](https://www.primefaces.org/primeng/#/setup)

## Installing

1. Add NPM package into your project:

  ```
  npm install @von-development-studio/primeng-confirmation-dialog --save
  ```

2. Add _**ConfirmationDialogModule**_ and _**ConfirmationDialogService**_ into `imports` and `providers` section

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

## Usage

1. Add service in constructor:

  ```typescript
  import { ConfirmationDialogService } from '@von-development-studio/primeng-confirmation-dialog';
  
  constructor(
    ...
    private confirmationDialog: ConfirmationDialogService,
    ...
  ) { }
  ```

1. Call service, `open` method, with configuration parameter:

  ```typescript
  this.confirmationDialog.open<any>({
    save: of({})
  });
  ```

<hr>

###### _[By Von Development Studio](https://www.von-development-studio.com/)_
