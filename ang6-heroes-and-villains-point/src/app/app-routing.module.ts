import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard/guard.service';

const routes: Routes = [
  {
    path: 'hexagonal-page',
    loadChildren: './shared/app-layouts/hexagonal-page/hexagonal-page.module#HexagonalPageModule'
  },
  {
    path: 'no-access',
    loadChildren: './pages/no-access/no-access.module#NoAccesssModule'
  },
  {
    path: 'register-character-and-dependences',
    loadChildren: './pages/register-character-and-dependences/register-character-and-dependences.module#RegisterCharacterAndDependencesModule'
  },
  {
    path: 'calendar',
    loadChildren: './pages/calendar/calendar.module#CalendarModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
    canDeactivate: [GuardService]
  },
  {
    path: 'register',
    loadChildren: './pages/register-user/register-user.module#RegisterUserModule',
    canDeactivate: [GuardService]
  },
  {
    path: 'register-profiles',
    loadChildren: './pages/register-profiles/register-profiles.module#RegisterProfilesModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'register-menus',
    loadChildren: './pages/register-menus/register-menus.module#RegisterMenusModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'statistics',
    loadChildren: './pages/statistics/statistics.module#StatisticsModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'list-icons',
    loadChildren: './pages/list-all-icons/list-all-icons.module#ListAllIconsModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'game',
    loadChildren: './pages/game/game.module#GameModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'heroes-and-villains',
    loadChildren: './pages/heroes-and-villains/heroes-and-villains.module#HeroesAndVillainsModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'character/:name/:id',
    loadChildren: './pages/character/character.module#CharacterModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  {
    path: 'user-profile',
    loadChildren: './pages/user-profile/user-profile.module#UserProfileModule',
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
