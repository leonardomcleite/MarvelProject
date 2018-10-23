import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { MapaDoBrasilModule } from '../../shared/mapa-do-brasil/mapa-do-brasil.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    MapaDoBrasilModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
