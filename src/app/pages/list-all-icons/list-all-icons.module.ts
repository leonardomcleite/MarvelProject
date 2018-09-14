import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ListAllIconsComponent } from './list-all-icons.component';

const routes: Routes = [
  {
    path: '',
    component: ListAllIconsComponent,
    data: {
      breadcrumb: 'Catálogo de Icones'
    },
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
  ],
  declarations: [
    ListAllIconsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListAllIconsModule { }
