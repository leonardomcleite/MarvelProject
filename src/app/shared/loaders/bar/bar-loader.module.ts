import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarLoaderComponent } from './bar-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    BarLoaderComponent
  ],
  exports: [
    BarLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarLoaderModule {}
