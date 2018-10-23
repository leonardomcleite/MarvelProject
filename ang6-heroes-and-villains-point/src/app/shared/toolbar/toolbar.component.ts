import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { EventReceived } from '../../models/event-received.model';
import { GuardService } from '../../services/guard/guard.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { UserPersonalData } from '../../models/user-personal-data.model';
import { MenuAccess } from 'src/app/models/menu-access.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Output() clickMenu: EventEmitter<EventReceived> = new EventEmitter();

  backPageIcon = false;
  subscription: Subscription[] = [];
  path: string[];
  userLogged: UserPersonalData;
  favorites: MenuAccess[] = [];

  constructor(
    public guardService: GuardService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.subscription.push(this.guardService.routerActivated.subscribe(returnQuery => {
      this.backPageIcon = true;
    }));
    this.userLogged = JSON.parse(sessionStorage.getItem('Perfis'));
    this.userLogged.profile.forEach(profile => {
      profile.menus.forEach(menu => {
        if (menu.favorite === '1' && menu.route !== 'user-profile') {
          this.favorites.push(menu);
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  logout() {
    this.guardService.setLogout();
  }

  setSidenav() {
    this.clickMenu.emit();
  }

  backPage() {
    this.path = this.guardService.getPreviousGuard();
    this.router.navigate(['/', this.path[this.path.length - 1]]);
    this.path.splice(this.path.length, 1);
  }
}
