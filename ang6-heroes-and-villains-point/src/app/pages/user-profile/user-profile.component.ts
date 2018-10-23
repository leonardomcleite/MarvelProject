import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { MenusService } from '../../services/menus/menus.service';
import { FormRegisterMenuComponent } from './shared-intern/form-register-menu/form-register-menu.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'nameMenu', 'description', 'route', 'hidden', 'favorite', 'icon'];
  dataSource: MatTableDataSource < any > ;
  resultsLength = 0;
  isLoadingResults = true;
  checkAll = false;
  isError: boolean;
  selected = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public menusService: MenusService,
    public notificationService: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchData();
  }

  searchData() {
    const data = [];
    this.isError = false;
    this.isLoadingResults = true;
    this.menusService.listMenus().toPromise().then(returnQuery => {
      this.resultsLength = returnQuery.length;
      returnQuery.forEach(element => {
        element.checkbox = false;
      });
      this.dataSource = new MatTableDataSource(returnQuery);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }).catch(error => {
      this.isError = true;
      this.isLoadingResults = false;
    });
  }

  registerNewMenu() {
    const dialogRef = this.dialog.open(FormRegisterMenuComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.menusService.createMenu(result).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Menu cadastrado com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
          this.searchData();
        }).catch(error => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Erro ao criar menu!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
        });
      }
    });
  }

  checkAllMenus() {
    this.dataSource.data.forEach(element => {
      element.checkbox = !this.checkAll;
    });
    !this.checkAll ? this.selected = this.dataSource.data.length : this.selected = 0;
  }

  changeSelection() {
    this.selected = 0;
    let cont = 0;
    this.dataSource.data.forEach(element => {
      if (element.checkbox) {
        cont++;
      }
    });
    if (cont === 0) {
      this.checkAll = false;
    } else {
      this.checkAll = true;
    }
    this.selected = cont;
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }
}
