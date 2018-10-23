import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatRadioModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatSelectModule } from '@angular/material';
import { ModalSimpleComponent } from './modal-simple.component';
import { ModalDialogModule } from '../modal-dialog/modal-dialog.module';

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
    MatSelectModule,
  ],
  declarations: [
    ModalSimpleComponent,
  ],
  exports: [
    ModalSimpleComponent,
  ],
  entryComponents: [
    ModalSimpleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalSimpleModule { }
