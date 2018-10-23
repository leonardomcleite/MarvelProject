import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { AppPageSimpleModule } from '../../shared/app-layouts/app-page-simple/app-page-simple.module';
import { FormRegisterMenuModule } from './shared-intern/form-register-menu/form-register-menu.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    FormRegisterMenuModule,
    AppPageSimpleModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  declarations: [
    UserProfileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserProfileModule { }
