import { Component, OnInit } from '@angular/core';
import { UserAuth } from '../../models/user-auth.model';
import { GuardService } from '../../services/guard/guard.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userAuth: UserAuth = new UserAuth();

  constructor(
    public guardService: GuardService
  ) { }

  ngOnInit() {
    this.guardService.isLogin.emit(true);
  }

  authLogin() {
    this.guardService.userAuth(this.userAuth);
  }

}
