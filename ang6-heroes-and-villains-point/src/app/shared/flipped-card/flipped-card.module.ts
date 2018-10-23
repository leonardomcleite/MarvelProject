import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlippedCardComponent } from './flipped-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlippedCardComponent
  ],
  exports: [
    FlippedCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlippedCardModule { }
