import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../utils/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent implements OnInit {
  // versionFront = require('../../../../package.json').version;
  versionFront = '1.0.0';
  year: number;

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
