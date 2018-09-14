import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guard/guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: './pages/register-user/register-user.module#RegisterUserModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [GuardService],
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [GuardService],
  },
  {
    path: 'heroes_and_villains',
    loadChildren: './pages/heroes/heroes.module#HeroesModule',
    canActivate: [GuardService],
  },
  {
    path: 'character/:name/:id',
    loadChildren: './pages/character/character.module#CharacterModule',
    canActivate: [GuardService],
  },
  {
    path: 'list-icons',
    loadChildren: './pages/list-all-icons/list-all-icons.module#ListAllIconsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
