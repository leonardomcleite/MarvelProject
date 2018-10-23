import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HexagonalPageComponent } from './hexagonal-page.component';
import { HexagonalPageRoutingModule } from './hexagonal-page-routing.module';


@NgModule({
  imports: [
    CommonModule,

    HexagonalPageRoutingModule,
  ],
  declarations: [
    HexagonalPageComponent
  ],
  exports: [
    HexagonalPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HexagonalPageModule { }
