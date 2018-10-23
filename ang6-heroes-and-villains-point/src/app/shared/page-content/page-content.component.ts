import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuardService } from '../../services/guard/guard.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'page-content',
    templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription[] = [];
  isLogin = true;

  constructor(
    public guardService: GuardService,
  ) {}

  ngOnInit() {
    this.subscription.push(this.guardService.isLogin.subscribe(returnQuery => {
      this.isLogin = returnQuery;
    }));
  }

  ngAfterViewInit() {
    this.subscription.push(this.guardService.isLogin.subscribe(returnQuery => {
      this.isLogin = returnQuery;
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
