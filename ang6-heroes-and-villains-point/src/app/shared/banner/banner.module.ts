import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    BannerComponent,
  ],
  exports: [
    BannerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerModule { }
