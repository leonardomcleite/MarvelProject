import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OptionsNotification } from '../../models/options-notifications.model';
import { UserPersonalData } from '../../models/user-personal-data.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { GuardService } from '../../services/guard/guard.service';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { UsersService } from '../../services/users/users.service';
import { DateFormatUtilService } from '../../shared/utils/date-format/date-format-util.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterUserComponent implements OnInit {

  dataPersonal: FormGroup;
  dataUser: FormGroup;
  confirmation: FormGroup;
  isEditable = false;
  registerLoad = false;
  userInformation: UserPersonalData = new UserPersonalData(null, null, null, null, null, null, null);

  @Input() get datePickerValue(): Date {return this._datePickerValue; }
  @Output() datePickerValueChange: EventEmitter<Date> = new EventEmitter();
  set datePickerValue(val: Date) {
    this._datePickerValue = val;
    this.datePickerValueChange.emit(val);
    this.userInformation.dtBirth = val !== undefined ? this.dateFormatUtilService.formatDate(val, 'dd/mm/yyyy').toString() : null;
  }
  _datePickerValue: Date;

  constructor(
    private _formBuilder: FormBuilder,
    public guardService: GuardService,
    public snackBar: MatSnackBar,
    public router: Router,
    public usersService: UsersService,
    public profilesService: ProfilesService,
    public dom: DomSanitizer,
    public notificationService: NotificationService,
    public dateFormatUtilService: DateFormatUtilService
  ) {}

  ngOnInit() {
    this.guardService.isLogin.emit(true);
    this.dataPersonal = this._formBuilder.group({
      name: ['', Validators.required],
      dtBirth: ['', Validators.required],
      sex: ['', Validators.required],
    });
    this.dataUser = this._formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.confirmation = this._formBuilder.group({
      cdConfirmation: ['', Validators.required],
    });
  }

  registerUser(stepper: any) {
    this.registerLoad = true;
    let messageOptions: OptionsNotification;
    if (this.userInformation.password !== this.userInformation.confirmPassword) {
      messageOptions = new OptionsNotification(`<span class="notification-content">Senhas não coincidem!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
      this.notification(messageOptions);
      return;
    }
    this.usersService.registerUser(this.userInformation).toPromise().then((returnQueryReg: any) => {
      messageOptions = new OptionsNotification(`<span class="notification-content">Verifique seu email para efetivar seu cadastro!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
      this.notification(messageOptions);
      returnQueryReg.cdConfirmation = null;
      this.userInformation = returnQueryReg;
      stepper.next();
      this.registerLoad = false;
    }).catch(error => {
      messageOptions = new OptionsNotification(`<span class="notification-content">Erro na busca dos Dados!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
      this.notification(messageOptions);
    });
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

  confirmRegister() {
    let messageOptions: OptionsNotification;

    this.usersService.confirmRegister(this.userInformation).toPromise().then((returnQuery: any) => {
      if (returnQuery.cdConfirmation === this.userInformation.cdConfirmation) {
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

}
