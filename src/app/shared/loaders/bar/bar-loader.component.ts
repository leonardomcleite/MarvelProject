import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CustomHttpEventObserverService } from '../../../services/base-service/custom-http-event-observer.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bar-loader',
  templateUrl: 'bar-loader.component.html',
  styleUrls: ['bar-loader.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.visible]': 'ajaxLoading'
  }
})

export class BarLoaderComponent implements OnInit, OnDestroy {
  public _subscriptions: Subscription[] = [];
  public ajaxLoading = false;

  constructor(
    private _httpEvent: CustomHttpEventObserverService
  ) {}

  ngOnInit() {
    this._subscriptions.push(this._httpEvent.beforeRequest.subscribe(() => this.ajaxLoading = true));
    this._subscriptions.push(this._httpEvent.afterRequest.subscribe(() => this.ajaxLoading = false));
  }

  ngOnDestroy() {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
