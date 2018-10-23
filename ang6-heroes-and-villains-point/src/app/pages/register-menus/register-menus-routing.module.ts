import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMenusComponent } from './register-menus.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterMenusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterMenusRoutingModule { }
