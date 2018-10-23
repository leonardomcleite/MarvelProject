import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { OptionsNotification } from '../../models/options-notifications.model';
import { UserPersonalData } from '../../models/user-personal-data.model';
import { NotificationService } from '../base-service/notification.service';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';

@Injectable()
export class GuardService implements CanActivate {

  @Output() isLogin: EventEmitter<any> = new EventEmitter();
  @Output() userError: EventEmitter<any> = new EventEmitter();
  @Output() routerActivated: EventEmitter<any> = new EventEmitter();

  messageOptions: OptionsNotification;
  baseBackEnd: string;
  userAutenticated: UserPersonalData;
  private _previousGuard: string[] = [];

  constructor(
    public router: Router,
    public propertyProvider: PropertyProviderService,
    public snackBar: MatSnackBar,
    public notificationService: NotificationService,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  /**
   * Metodo que autentica rotas
   *
   * @param route - rota a ser autenticada
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const path = route.routeConfig.path;
    this.routerActivated.emit(path);
    this.userAutenticated = JSON.parse(sessionStorage.getItem('Perfis'));
    if (this.userAutenticated === undefined || this.userAutenticated === null) {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.profileAuth(path, this.userAutenticated)) {
      this.isLogin.emit(false);
      return true;
    } else {
      this.isLogin.emit(true);
      this._previousGuard.push(path);
      this.router.navigate(['/no-access']);
      return false;
    }
  }

  canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let path: any = state.url;
    if (path !== null && path !== 'login') {
      path = path[0].path.replace('/', '');
      this._previousGuard.push(path);
    }
    return true;
  }

  userAuth(userAuth: UserPersonalData) {
    this.userAutenticated = userAuth;
    sessionStorage.setItem('Perfis', JSON.stringify(this.userAutenticated));
    this.router.navigate(['/']);
    this.isLogin.emit(false);
  }

  profileAuth(path: string, user: any) {
    for (let indexProfile = 0; indexProfile < user.profile.length; indexProfile++) {
      const profiles = user.profile[indexProfile];
      for (let indexMenu = 0; indexMenu < profiles.menus.length; indexMenu++) {
        const menus = profiles.menus[indexMenu].route;
        if (menus === path) {
          return true;
        }
      }
    }
    this.messageOptions = new OptionsNotification(`<span class="notification-content">Você não tem permissão para acessar esta rota!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
    this.notification(this.messageOptions);
    return false;
  }

  setLogout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  getPreviousGuard(): string[] {
    return this._previousGuard;
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

}
