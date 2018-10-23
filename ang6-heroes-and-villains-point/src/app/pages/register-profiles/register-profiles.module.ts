import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { AppPageSimpleModule } from '../../shared/app-layouts/app-page-simple/app-page-simple.module';
import { RegisterProfilesRoutingModule } from './register-profiles-routing.module';
import { RegisterProfilesComponent } from './register-profiles.component';
import { FormRegisterProfileModule } from './shared-intern/form-register-profile/form-register-profile.module';
import { TableMenusModule } from './shared-intern/table-menus/table-menus.module';
import { ModalSimpleModule } from 'src/app/shared/modal-simple/modal-simple.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterProfilesRoutingModule,
    FormRegisterProfileModule,
    AppPageSimpleModule,
    TableMenusModule,
    ModalSimpleModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  declarations: [
    RegisterProfilesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterProfilesModule { }
