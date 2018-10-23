import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CirclesLoaderComponent } from './circles-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CirclesLoaderComponent
  ],
  exports: [
    CirclesLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CirclesLoaderModule {}
