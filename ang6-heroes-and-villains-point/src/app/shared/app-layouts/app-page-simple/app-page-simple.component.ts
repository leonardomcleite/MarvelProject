import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-page-simple',
    templateUrl: './app-page-simple.component.html',
    styleUrls: ['./app-page-simple.component.scss'],
})
export class AppPageSimpleComponent {

  @Input() principalTitle;
  @Input() colorBackground;
  @Input() imgBackground;

  constructor() {}

  path() {
    if (this.imgBackground !== undefined) {
      return 'url(' + this.imgBackground + ') no-repeat';
    } else if (this.colorBackground !== undefined) {
      return this.colorBackground;
    } else {
      return null;
    }
  }
}
