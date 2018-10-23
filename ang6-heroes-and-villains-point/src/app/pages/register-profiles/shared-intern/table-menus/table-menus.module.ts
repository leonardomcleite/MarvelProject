import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatPaginatorModule, MatTableModule, MatTabsModule } from '@angular/material';
import { ModalDialogModule } from '../../../../shared/modal-dialog/modal-dialog.module';
import { TableMenusComponent } from './table-menus.component';

@NgModule({
  imports: [
    CommonModule,
    ModalDialogModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    TableMenusComponent,
  ],
  exports: [
    TableMenusComponent,
  ],
  entryComponents: [
    TableMenusComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableMenusModule { }
