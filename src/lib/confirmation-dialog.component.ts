import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/components/dynamicdialog/dynamicdialog-config';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog/dynamicdialog-ref';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmationDialogLocalizedMsg } from './confirmation-dialog.config-model';

@Component({
  selector: 'von-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styles: [`
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    p-button { margin-left: 10px; }
    .icon-finished { font-size: 10em; padding: .25em; display: block; }
  `],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class ConfirmationDialogComponent<T> implements OnInit {

  messages: ConfirmationDialogLocalizedMsg;
  save: Observable<T>;

  result: T = null;
  loading = false;
  icon: string;
  saving = false;
  valid: boolean = null;
  finished = false;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.messages = this.config.data.messages;
    this.save = this.config.data.save;
  }

  doSave = () => {
    this.loading = true;
    this.saving = true;
    this.save.pipe(
      tap(this.setFinalTap)
    ).subscribe(
      result => {
        this.valid = true;
        this.icon = 'far fa-check-circle';
        this.result = result;
      },
      () => {
        this.valid = false;
        this.icon = 'far fa-times-circle';
      });
  }

  doClose = () => {
    this.ref.close(this.result);
  }

  setFinalTap = () => {
    this.loading = false;
    this.result = null;
    this.finished = true;
  }

}
