import { AfterViewChecked, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomHttpEventObserverService } from './services/base-service/custom-http-event-observer.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  load = false;
  _subscriptions: Subscription[] = [];

  constructor(
    private customHttpEventObserverService: CustomHttpEventObserverService
  ) {
    // console.log(🎃 === 🎃);
  }

  ngAfterViewChecked() {
    this.customHttpEventObserverService.beforeRequest.subscribe(() => {
      this.load = true;
    });
    this.customHttpEventObserverService.afterRequest.subscribe(() => {
      this.load = false;
    });
  }

}
