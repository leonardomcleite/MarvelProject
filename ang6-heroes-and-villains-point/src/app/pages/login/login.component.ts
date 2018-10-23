import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { GuardService } from '../../services/guard/guard.service';
import { UsersService } from '../../services/users/users.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slide', [
      state('void', style({
        'height': '0px',
        overflow: 'hidden'
      })),
      transition(':enter', [
          animate('500ms ease-in-out', style({
              'height': '*',
              overflow: 'hidden'
          }))
      ]),
      transition(':leave', [
          animate('500ms ease-in-out', style({
              'height': '0px',
              overflow: 'hidden'
          }))
      ])
    ])
  ],
})
export class LoginComponent implements OnInit {

  userDisabled = false;
  emailDisabled = false;
  status = 1;

  dataUser: FormGroup = this.fb.group({
    user: [{value: '', disabled: this.userDisabled}, [Validators.minLength(6)]],
    email: [{value: '', disabled: this.emailDisabled}, [Validators.minLength(6), Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]]
  });

  dataConfirmation: FormGroup = this.fb.group({
    cdConfirmation: ['', [Validators.minLength(5)]]
  });

  messageOptions: OptionsNotification;
  userConfirmation: any;

  constructor(
    private fb: FormBuilder,
    public guardService: GuardService,
    public usersService: UsersService,
    public notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.guardService.isLogin.emit(true);
  }

  authLogin(formValid: boolean) {
    if (!formValid) {
      return;
    }
    this.usersService.loginUser(this.dataUser.value).toPromise().then(returnQuery => {
      if (returnQuery.user !== null) {
        if (returnQuery.status === 0) {
          this.userConfirmation = this.dataUser.value;
          this.status = 0;
          this.messageOptions = new OptionsNotification(`<span class="notification-content">Finalize seu cadastro, informando o código de confirmação enviado por e-mail!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 50000000);
          this.notification(this.messageOptions);
        } else {
          this.status = 1;
          this.guardService.userAuth(returnQuery);
        }
      } else {
        this.messageOptions = new OptionsNotification(`<span class="notification-content">Usuário ou senha inválidos!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
        this.notification(this.messageOptions);
      }
    });
  }

  confirmRegister() {
    let messageOptions: OptionsNotification;
    this.userConfirmation.cdConfirmation = this.dataConfirmation.get('cdConfirmation').value;
    this.usersService.confirmExitentUser(this.userConfirmation).toPromise().then((returnQuery: any) => {
      if (returnQuery.cdConfirmation === this.userConfirmation.cdConfirmation) {
        // notifica do sucesso da operacao ao ususario
        messageOptions = new OptionsNotification(`<span class="notification-content">Usuário confirmado com sucesso!. Seja bem vindo à Point dos Heróis e Vilões</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
        this.notification(messageOptions);
        // salva na secão os dados do usuario
        this.guardService.userAuth(returnQuery);
      } else {
        messageOptions = new OptionsNotification(`<span class="notification-content">Desculpe. Código de confirmação inválido!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
        this.notification(messageOptions);
      }
    });
  }

  validateForm() {
    if (this.dataUser.get('user').value.length > 0 || this.dataUser.get('email').value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  changeForm() {
    this.dataUser.get('user').value.length > 0 ? this.dataUser.get('email').disable() : this.dataUser.get('email').enable();
    this.dataUser.get('email').value.length > 0 ? this.dataUser.get('user').disable() : this.dataUser.get('user').enable();
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

}
