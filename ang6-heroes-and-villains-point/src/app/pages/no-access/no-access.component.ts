import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { RequestAccessModel } from 'src/app/models/request-access.model';
import { UserAuth } from 'src/app/models/user-auth.model';
import { GuardService } from 'src/app/services/guard/guard.service';
import { OptionsNotification } from 'src/app/models/options-notifications.model';
import { NotificationService } from 'src/app/services/base-service/notification.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'no-access',
    templateUrl: './no-access.component.html',
    styleUrls: ['./no-access.component.scss']
})

export class NoAccessComponent {

  constructor(
    public usersService: UsersService,
    public guardService: GuardService,
    public notificationService: NotificationService,
  ) { }

  requestAccess() {
    const userAuth: UserAuth = JSON.parse(sessionStorage.getItem('Perfis'));
    const path = this.guardService.getPreviousGuard();
    const access = new RequestAccessModel(userAuth, path[path.length - 1]);

    this.usersService.requestAccess(access).toPromise().then(returnQuery => {
      this.notification(
        new OptionsNotification(`<span class="notification-content">Sua solicitação foi enviada com sucesso. Aguarde que vamos analisar sua solicitação!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000)
      );
    });
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

}
