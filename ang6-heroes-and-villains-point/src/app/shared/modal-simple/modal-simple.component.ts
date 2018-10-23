import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-simple',
  templateUrl: './modal-simple.component.html',
  styleUrls: ['./modal-simple.component.scss']
})
export class ModalSimpleComponent {

  htmlContent: SafeHtml;

  constructor(
    public dialogRef: MatDialogRef < ModalSimpleComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    this.dialogRef.close(true);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

}
