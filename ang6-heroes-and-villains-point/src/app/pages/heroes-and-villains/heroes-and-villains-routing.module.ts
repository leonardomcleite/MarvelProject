import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesAndVillainsComponent } from './heroes-and-villains.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesAndVillainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesAndVillainsRoutingModule { }
