import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCharacterAndDependencesComponent } from './register-character-and-dependences.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterCharacterAndDependencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCharacterAndDependencesRoutingModule { }
