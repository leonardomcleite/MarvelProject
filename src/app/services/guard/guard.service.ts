import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuth } from '../../models/user-auth.model';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class GuardService implements CanActivate {

  @Output() isLogin: EventEmitter<any> = new EventEmitter();
  @Output() userLogado: EventEmitter<any> = new EventEmitter();
  @Output() userError: EventEmitter<any> = new EventEmitter();

  usersRegistred: any [] = [
    {
      user: '123',
      password: '123',
      profile: [
        {route: ''},
        {route: 'home'},
        {route: 'heroes_and_villains'},
        {route: 'character/:name/:id'},
        {route: 'list-icons'},
      ]
    },
    {
      user: undefined,
      password: undefined,
      profile: [
        {route: ''},
        {route: 'home'},
        {route: 'heroes_and_villains'},
        {route: 'character/:name/:id'},
        {route: 'list-icons'},
      ]
    },
  ];

  baseBackEnd: string;
  profileAutenticated: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    public propertyProvider: PropertyProviderService,
    public snackBar: MatSnackBar,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  /**
   * Metodo que autentica rotas
   *
   * @param route - rota a ser autenticada
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const path = route.routeConfig.path;
    this.profileAutenticated = JSON.parse(sessionStorage.getItem('Perfis'));
    if (this.profileAutenticated === undefined || this.profileAutenticated === null) {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.profileAuth(path, this.profileAutenticated)) {
      this.isLogin.emit(false);
      return true;
    } else {
      this.isLogin.emit(true);
      return false;
    }
  }

  userAuth(userAuth: UserAuth) {
    for (let index = 0; index < this.usersRegistred.length; index++) {
      const user = this.usersRegistred[index];
      if (user.user === userAuth.user && user.password === userAuth.password) {
        this.profileAutenticated = user.profile;
        sessionStorage.setItem('Perfis', JSON.stringify(this.profileAutenticated));
        this.router.navigate(['/']);
        this.isLogin.emit(false);
        return true;
      }
    }
    this.notification('Usuário ou Senha Inválidos');
    return false;
    // this.http.post(this.baseBackEnd + REST_PATH.autenticator.login, userAuth);
  }

  profileAuth(path: string, profiles: any) {
    for (let index = 0; index < profiles.length; index++) {
      const profile = profiles[index].route;
      if (profile === path) {
        return true;
      }
    }
    this.notification('Você não tem permissão para acessar esta rota');
    return false;
  }

  notification(message: string) {
    const snackBarRef = this.snackBar.open(message, 'X', this.createConfigSnackbar());
  }

  createConfigSnackbar() {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    return config;
  }

}
