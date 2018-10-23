import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent {

  htmlContent: SafeHtml;
  action: SafeHtml;
  data: any;

  constructor(
    public snackBarRef: MatSnackBarRef < NotificationComponent >
  ) {
    this.data = snackBarRef.containerInstance.snackBarConfig.data;
  }

  closeSnackBarMensagem() {
    this.snackBarRef.dismiss();
  }
}
