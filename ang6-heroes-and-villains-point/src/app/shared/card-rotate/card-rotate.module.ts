import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRotateComponent } from './card-rotate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CardRotateComponent
  ],
  exports: [
    CardRotateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardRotateModule { }
