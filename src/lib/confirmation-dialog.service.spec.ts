import { TestBed } from '@angular/core/testing';
import { DialogService } from 'primeng/api';
import { of } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { Messages } from './confirmation-dialog.config-constants';
import { ConfirmationDialogLocalizedMsg } from './confirmation-dialog.config-model';
import { ConfirmationDialogService } from './confirmation-dialog.service';

describe(`Confirmation Dialog Service`, () => {

  let service: ConfirmationDialogService;
  const commonDialogSetup = {
    style: {
      maxHeight: '50%'
    },
    closeOnEscape: true,
    width: '35%'
  };
  const getExpectedCall = (msg: ConfirmationDialogLocalizedMsg) => ({
    header: msg.title,
    data: {
      messages: msg,
      save: null
    },
    ...commonDialogSetup
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DialogService, useValue: {
            open: () => of()
          }
        },
        ConfirmationDialogService
      ]
    });
    service = TestBed.get(ConfirmationDialogService);
  });

  it(`should be created`, () => {
    expect(service).toBeDefined();
  });

  it(`should call dialogService open method with localizedMsg EN when no extra configuration is received`, () => {
    const localizedMsg = Messages.en;
    const expectedCallParameter = getExpectedCall(localizedMsg);
    const spyOnCall = spyOn(service['dialogService'], 'open');

    service.open<any>({
      save: null
    });

    expect(spyOnCall).toHaveBeenCalledWith(ConfirmationDialogComponent, expectedCallParameter);
  });

  it(`should call dialogService open method with localizedMsg ES when configuration localization is 'es'`, () => {
    const localizedMsg = Messages.es;
    const expectedCallParameter = getExpectedCall(localizedMsg);
    const spyOnCall = spyOn(service['dialogService'], 'open');

    service.open<any>({
      save: null,
      localization: 'eS'
    });

    expect(spyOnCall).toHaveBeenCalledWith(ConfirmationDialogComponent, expectedCallParameter);
  });

  it(`should call dialogService open method with localizedMsg EN as default when configuration localization does not exist`, () => {
    const localizedMsg = Messages.en;
    const expectedCallParameter = getExpectedCall(localizedMsg);
    const spyOnCall = spyOn(service['dialogService'], 'open');

    service.open<any>({
      save: null,
      localization: 'fr'
    });

    expect(spyOnCall).toHaveBeenCalledWith(ConfirmationDialogComponent, expectedCallParameter);
  });

  it(`should call dialogService open method with localizedMsg EN and custom messages when custom configuration is received`, () => {
    const localizedMsg = Messages.en;
    localizedMsg.message = 'Custom Text';
    localizedMsg.save = 'Finish';
    const expectedCallParameter = getExpectedCall(localizedMsg);
    const spyOnCall = spyOn(service['dialogService'], 'open');

    service.open<any>({
      save: null,
      custom: {
        message: 'Custom Text',
        save: 'Finish'
      }
    });

    expect(spyOnCall).toHaveBeenCalledWith(ConfirmationDialogComponent, expectedCallParameter);
  });

  it(`should call dialogService open method with localizedMsg ES and custom messages when custom configuration is received`, () => {
    const localizedMsg = Messages.es;
    localizedMsg.message = 'Texto customizado';
    localizedMsg.save = 'Guardar Borrador';
    const expectedCallParameter = getExpectedCall(localizedMsg);
    const spyOnCall = spyOn(service['dialogService'], 'open');

    service.open<any>({
      save: null,
      localization: 'es',
      custom: {
        message: 'Texto customizado',
        save: 'Guardar Borrador'
      }
    });

    expect(spyOnCall).toHaveBeenCalledWith(ConfirmationDialogComponent, expectedCallParameter);
  });

});
