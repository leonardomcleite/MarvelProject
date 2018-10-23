import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-all-icons',
  templateUrl: './list-all-icons.component.html',
  styleUrls: ['./list-all-icons.component.scss']
})
export class ListAllIconsComponent implements OnInit {

  optionSelected = 'Icones Material';
  options: string[];
  iconsMaterial: string[];
  iconsFontAwesome: string[];
  icons: any;

  constructor() { }

  findIcon(word: string) {
    if (this.optionSelected === 'Icones Material') {
      this.iconsMaterial = [];
      this.icons.material.forEach(icon => {
        if (icon.includes(word)) {
          this.iconsMaterial.push(icon);
        }
      });
    } else {
      this.iconsFontAwesome = [];
      this.icons.fontAwesome.forEach(icon => {
        if (icon.includes(word)) {
          this.iconsFontAwesome.push(icon);
        }
      });
    }
  }

  ngOnInit() {
    this.options = ['Icones Material', 'Icones FontAwesome'];
    this.icons = require('../../../assets/icons.json');

    this.iconsMaterial = this.icons.material;
    this.iconsFontAwesome = this.icons.fontAwesome;
  }

}
