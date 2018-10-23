import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { NoAccessRoutingModule } from './no-access-routing.module';
import { NoAccessComponent } from './no-access.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoAccessRoutingModule,

    MatButtonModule,
  ],
  declarations: [
    NoAccessComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoAccesssModule { }
