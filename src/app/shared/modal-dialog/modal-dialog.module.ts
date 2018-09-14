import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog.component';
import { MatButtonToggleModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [
    ModalDialogComponent
  ],
  entryComponents: [
    ModalDialogComponent
  ]
})
export class ModalDialogModule { }
