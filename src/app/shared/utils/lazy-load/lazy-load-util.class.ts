import { EventEmitter, Input, Output } from '@angular/core';

export class LazyLoadUtilClass {

  @Output() searchData = new EventEmitter <any> ();

  columns: number;
  totalRecords: number;
  loading = false;
  rows: number;
  orderBy: string;
  tableName: string;
  error = false;
  page = 0;

  @Input() get searchWord(): any {return this._searchWord; }
  @Output() searchWordChange: EventEmitter<any> = new EventEmitter();
  set searchWord(val: any) {
    this._searchWord = val;
    this.searchWordChange.emit(val);
    this.loading = true;
    this.searchData.emit();
  }
  _searchWord = null;

  params(
    error: boolean,
    columns: number,
    totalRecords: number,
    loading: boolean,
    rows: number,
    page: number,
    orderBy: string,
    tableName: string
  ) {
    this.error = error;
    this.columns = columns;
    this.totalRecords = totalRecords;
    this.loading = loading;
    this.rows = rows;
    this.page = page;
    this.orderBy = orderBy;
    this.tableName = tableName;
  }

  lazyLoadTable(event) {
    this.loading = true;
    this.page = 0;
    this.rows = event.rows;
    if (event.first !== 0) {
      this.page = (event.first / this.rows);
    }
    this.searchData.emit();
  }

  lazyLoad(event) {
    this.loading = true;
    this.searchData.emit();
  }

  reloadData() {
    this.page = 0;
    this.rows = 10;
    this.orderBy = null;
    this.searchWord = '';
  }

}
