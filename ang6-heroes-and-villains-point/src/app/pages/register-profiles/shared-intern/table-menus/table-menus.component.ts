import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table-menus',
  templateUrl: './table-menus.component.html',
  styleUrls: ['./table-menus.component.scss']
})
export class TableMenusComponent implements OnInit {

  displayedColumns: string[] = ['nameMenu', 'route', 'description', 'route', 'hidden', 'favorite', 'icon'];
  dataSource: MatTableDataSource < any > ;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef < TableMenusComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data.dataSource);
    this.dataSource.paginator = this.paginator;
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
