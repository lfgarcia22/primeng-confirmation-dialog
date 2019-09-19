import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { Messages } from './confirmation-dialog.config-constants';

describe(`Confirmation Dialog Component`, () => {

  let component: ConfirmationDialogComponent<any>;
  let fixture: ComponentFixture<ConfirmationDialogComponent<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDialogComponent],
      imports: [
        CommonModule,
        ButtonModule,
        DialogModule,
        ProgressSpinnerModule
      ],
      providers: [
        {
          provide: DynamicDialogRef, useValue: {
            close: of()
          }
        },
        {
          provide: DynamicDialogConfig, useValue: {
            data: {
              messages: Messages.en,
              save: of({})
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
  });

  it(`should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`should call ref close with null object as result`, () => {
    const spyOnCall = spyOn(component['ref'], 'close');

    component.doClose();

    expect(component.result).toBeNull();
    expect(spyOnCall).toHaveBeenCalledWith(null);
  });

  it(`should call ref close with result object when value was set previously`, () => {
    const spyOnCall = spyOn(component['ref'], 'close');
    component.result = true;

    component.doClose();

    expect(spyOnCall).toHaveBeenCalledWith(true);
  });

  it(`should change final values when save is subscribed`, () => {
    component.setFinalTap();

    expect(component.loading).toBeFalsy();
    expect(component.result).toBeNull();
    expect(component.finished).toBeTruthy();
  });

  it(`should set valid values when save is subscribed sucessfully`, async () => {
    component.save = of(true);

    component.doSave();

    delay(500);

    expect(component.valid).toBeTruthy();
    expect(component.icon).toBe('far fa-check-circle');
    expect(component.result).toBeTruthy();
  });

  it(`should set valid values when save is subscribed sucessfully`, async () => {
    component.save = throwError(false);

    component.doSave();

    delay(500);

    expect(component.valid).toBeFalsy();
    expect(component.icon).toBe('far fa-times-circle');
    expect(component.result).toBeNull();
  });

});
