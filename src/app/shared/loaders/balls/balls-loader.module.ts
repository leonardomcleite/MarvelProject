import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallsLoaderComponent } from './balls-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BallsLoaderComponent
  ],
  exports: [
    BallsLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BallsLoaderModule { }
