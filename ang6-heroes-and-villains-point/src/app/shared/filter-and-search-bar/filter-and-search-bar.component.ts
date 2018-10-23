import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-and-search-bar',
  templateUrl: './filter-and-search-bar.html',
  styleUrls: ['./filter-and-search-bar.scss']
})
export class FilterAndSearchBarComponent implements OnInit {

  @Output() orderBy: EventEmitter<string> = new EventEmitter();
  @Output() orderByName: EventEmitter<string> = new EventEmitter();
  @Output() searchBy: EventEmitter<string> = new EventEmitter();

  _orderBy = '-';
  _orderByName = 'modified';

  constructor() {}

  ngOnInit() {
    // this.year = new Date().getFullYear();
  }

  setOrderBy(by: string) {
    this.orderBy.emit(by);
    this._orderBy = by;
  }

  setOrderByName(by: string) {
    this.orderByName.emit(by);
    this._orderByName = by;
  }

  setSearchBy(word: string) {
    word === '' ? this.searchBy.emit(null) : this.searchBy.emit(word);
  }

}
