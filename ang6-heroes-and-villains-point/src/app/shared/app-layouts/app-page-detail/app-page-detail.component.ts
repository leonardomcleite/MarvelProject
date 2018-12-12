import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-page-detail',
    templateUrl: './app-page-detail.component.html',
    styleUrls: ['./app-page-detail.component.scss'],
})
export class AppPageDetailComponent {

  @Input() content;
}
