import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooeyRingLoaderComponent } from './gooey-ring-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GooeyRingLoaderComponent
  ],
  exports: [
    GooeyRingLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GooeyRingLoaderModule { }
