import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuardService } from './services/guard/guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  substription: Subscription[] = [];
  isLogin = false;

  constructor(
    public guardService: GuardService
  ) {}

  ngOnInit() {
    // this.substription.push(this.guardService.isLogin.subscribe(returnQuery => {
    //   this.isLogin = returnQuery;
    // }));
  }

  ngAfterViewInit() {
    this.substription.push(this.guardService.isLogin.subscribe(returnQuery => {
      this.isLogin = returnQuery;
    }));
  }

}
