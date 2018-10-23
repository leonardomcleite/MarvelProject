import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { MenusService } from '../../../../services/menus/menus.service';
import { ProfileAccess } from '../../../../models/profiles.model';
import { MenuAccess } from '../../../../models/menu-access.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-register-profile',
  templateUrl: './form-register-profile.component.html',
  styleUrls: ['./form-register-profile.component.scss']
})
export class FormRegisterProfileComponent implements OnInit, AfterViewInit {

  formRegister: FormGroup = this.fb.group({
    nameProfile: [{value: '', disabled: this.data.changeProfile}, Validators.required],
  });

  displayedColumns: string[] = ['checkbox', 'nameMenu', 'route', 'route', 'hidden', 'favorite', 'icon'];
  menus: MenuAccess[] = [];
  dataSource: MatTableDataSource < any > ;
  resultsLength = 0;
  isLoadingResults = true;
  checkAll = false;
  isError: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public menusService: MenusService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef < FormRegisterProfileComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.formRegister.controls['nameProfile'].setValue(this.data.nameProfile);
    this.isLoadingResults = true;
  }

  ngAfterViewInit(): void {
    this.searchData();
  }

  searchData() {
    this.isError = false;
    this.menusService.listMenus().toPromise().then(returnQuery => {
      this.resultsLength = returnQuery.length;
      returnQuery.forEach(menu => {
        menu.checkbox = false;
      });
      if (this.data.dataSource !== undefined) {
        returnQuery.forEach(Allmenus => {
          for (let index = 0; index < this.data.dataSource.length; index++) {
            const menu = this.data.dataSource[index];
            if (menu.nameMenu === Allmenus.nameMenu) {
              Allmenus.checkbox = true;
            }
          }
        });
      }
      this.dataSource = new MatTableDataSource(returnQuery);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
      this.changeSelection();
    }).catch(error => {
      this.isError = true;
      this.isLoadingResults = false;
    });
  }

  onSubmit(): void {
    const profile: ProfileAccess = new ProfileAccess(this.formRegister.get('nameProfile').value, this.menus);
    profile.id = this.data.id;
    this.dialogRef.close(profile);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  changeSelection() {
    this.menus = [];
    this.dataSource.data.forEach(element => {
      if (element.checkbox) {
        this.menus.push(element);
      }
    });
  }

  checkAllMenus() {
    this.dataSource.data.forEach(element => {
      element.checkbox = !this.checkAll;
    });
  }

}
