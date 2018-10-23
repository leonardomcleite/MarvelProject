import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatRadioModule, MatSnackBarModule, MatTableModule, MatTabsModule } from '@angular/material';
import { ModalDialogModule } from '../../../../shared/modal-dialog/modal-dialog.module';
import { FormRegisterMenuComponent } from './form-register-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalDialogModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  declarations: [
    FormRegisterMenuComponent,
  ],
  exports: [
    FormRegisterMenuComponent,
  ],
  entryComponents: [
    FormRegisterMenuComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormRegisterMenuModule { }
