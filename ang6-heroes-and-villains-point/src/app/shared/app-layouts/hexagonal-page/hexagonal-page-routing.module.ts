import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexagonalPageComponent } from './hexagonal-page.component';

const routes: Routes = [
  {
    path: '',
    component: HexagonalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HexagonalPageRoutingModule { }
