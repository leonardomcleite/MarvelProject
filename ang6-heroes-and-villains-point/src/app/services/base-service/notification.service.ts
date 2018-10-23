import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NotificationComponent } from '../../shared/notification/notification.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    public dom: DomSanitizer,
  ) {}

  error(option: any) {
    const options: any = {
      message: option.title + '. ' + option.message,
      type: 'error',
      action: `<mat-icon>close</mat-icon>`,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      time: 2000
    };
    this.notification(options);
  }

  notification(options: any) {
    const snackBarRef = this.snackBar.openFromComponent(NotificationComponent, this.createConfigSnackbar(options));
    snackBarRef.instance.htmlContent = this.dom.bypassSecurityTrustHtml(options.message);
    snackBarRef.instance.action = this.dom.bypassSecurityTrustHtml(options.action);
    snackBarRef.afterDismissed().subscribe(returnSnackBar => {});
  }

  createConfigSnackbar(options: any) {
    const config = new MatSnackBarConfig();
    config.duration = options.time;
    config.verticalPosition = options.verticalPosition;
    config.horizontalPosition = options.horizontalPosition;
    config.data = {
      type: options.type,
      showAction: options.showAction,
    };
    return config;
  }

}
