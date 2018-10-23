import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { MenuAccess } from 'src/app/models/menu-access.model';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { MenusService } from '../../services/menus/menus.service';
import { FormRegisterMenuComponent } from './shared-intern/form-register-menu/form-register-menu.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-menus',
  templateUrl: './register-menus.component.html',
  styleUrls: ['./register-menus.component.scss'],
})

export class RegisterMenusComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'nameMenu', 'description', 'route', 'hidden', 'favorite', 'icon', 'edit'];
  dataSource: MatTableDataSource < any >;
  dataEditable: MatTableDataSource < MenuAccess >;
  resultsLength = 0;
  isLoadingResults = true;
  checkAll = false;
  isError: boolean;
  selected = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public menusService: MenusService,
    public notificationService: NotificationService,
    public dialog: MatDialog,
    public dom: DomSanitizer,
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
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(returnQuery)));
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }).catch(error => {
      this.isError = true;
      this.isLoadingResults = false;
    });
  }

  registerNewMenu() {
    const dialogRef = this.dialog.open(FormRegisterMenuComponent, {
      data: {
        title: 'Cadastrar Menu',
        dataSource: new MenuAccess('', '', '', '', '', '')
      }
    });

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

  updateMenu(index: number) {
    const dialogRef = this.dialog.open(FormRegisterMenuComponent, {
      data: {
        title: 'Alterar Menu',
        dataSource: this.dataSource.data[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.menusService.updateMenu(result).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Menu alterado com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
          this.searchData();
        }).catch(error => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Erro ao alterar menu!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
        });
      }
    });
  }

  deleteSelection() {
    const menus: MenuAccess[] = [];
    this.dataSource.data.forEach(element => {
      if (element.checkbox) {
        menus.push(element);
      }
    });
    this.deleteMenu(menus);
  }

  deleteMenu(menus: MenuAccess[]) {
    const dialogRef = this.dialog.open(ModalSimpleComponent, {
      data: {
        title: 'Excluír Menu(s)',
      }
    });
    const content = `<span>[ ${menus.length} ] Menu(s) será(ão) excluído(s), deseja continuar?</span>`;
    dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(content);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.menusService.deleteMenu(menus).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Menu(s) excluído(s) com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
          this.searchData();
        });
      } else {
        this.dataSource.data.forEach(element => {
          element.checkbox = false;
        });
      }
      this.checkAll = false;
      this.selected = 0;
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
