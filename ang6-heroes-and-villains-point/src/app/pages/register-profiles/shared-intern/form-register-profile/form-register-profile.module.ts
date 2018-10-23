import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatTableModule, MatTabsModule } from '@angular/material';
import { ModalDialogModule } from '../../../../shared/modal-dialog/modal-dialog.module';
import { FormRegisterProfileComponent } from './form-register-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalDialogModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    FormRegisterProfileComponent,
  ],
  exports: [
    FormRegisterProfileComponent,
  ],
  entryComponents: [
    FormRegisterProfileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormRegisterProfileModule { }
