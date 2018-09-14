import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorModule { }
