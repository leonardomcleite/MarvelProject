import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardService } from '../../services/guard/guard.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { UserPersonalData } from '../../models/user-personal-data.model';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  dataPersonal: FormGroup;
  dataUser: FormGroup;
  isEditable = false;
  userInformation: UserPersonalData = new UserPersonalData(null, null, null, null, null, null, null);

  constructor(
    private _formBuilder: FormBuilder,
    public guardService: GuardService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.guardService.isLogin.emit(true);
    this.dataPersonal = this._formBuilder.group({
      name: ['', Validators.required],
      dtBirth: ['', Validators.required],
      sex: ['', Validators.required],
    });
    this.dataUser = this._formBuilder.group({
      user: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  registerUser(stepper: any) {
    if (this.userInformation.password !== this.userInformation.confirmPassword) {
      this.notification('Senhas não coincidem!');
      return;
    }
    console.log(this.userInformation);
    this.notification('Usuário registrado com sucesso!');
    stepper.reset();
  }

  notification(message: string) {
    const snackBarRef = this.snackBar.open(message, null, this.createConfigSnackbar());
  }

  createConfigSnackbar() {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    return config;
  }

}
