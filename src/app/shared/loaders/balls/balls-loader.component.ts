import { Component, Input } from '@angular/core';

@Component({
  selector: 'balls-loader',
  templateUrl: './balls-loader.component.html',
  styleUrls: ['./balls-loader.component.scss']
})
export class BallsLoaderComponent {

  @Input() typeLoader: string;
}
