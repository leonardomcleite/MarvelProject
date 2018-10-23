import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProfilesComponent } from './register-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterProfilesRoutingModule { }
