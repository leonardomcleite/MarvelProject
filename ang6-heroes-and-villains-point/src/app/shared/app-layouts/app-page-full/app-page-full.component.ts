import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-page-full',
    templateUrl: './app-page-full.component.html',
    styleUrls: ['./app-page-full.component.scss'],
})
export class AppPageFullComponent {

  @Input() principalTitle;
  @Input() image = '../../../../assets/images/Headers/header-heroes3.jpg';

  constructor() {}
}
