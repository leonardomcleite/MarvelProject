import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { AppPageSimpleModule } from '../../shared/app-layouts/app-page-simple/app-page-simple.module';
import { RegisterMenusRoutingModule } from './register-menus-routing.module';
import { RegisterMenusComponent } from './register-menus.component';
import { FormRegisterMenuModule } from './shared-intern/form-register-menu/form-register-menu.module';
import { ModalSimpleModule } from 'src/app/shared/modal-simple/modal-simple.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterMenusRoutingModule,
    FormRegisterMenuModule,
    AppPageSimpleModule,
    ModalSimpleModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [
    RegisterMenusComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterMenusModule { }
