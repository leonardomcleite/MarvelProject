import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { FormRegisterProfileComponent } from './shared-intern/form-register-profile/form-register-profile.component';
import { TableMenusComponent } from './shared-intern/table-menus/table-menus.component';
import { ProfileAccess } from 'src/app/models/profiles.model';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-profiles',
  templateUrl: './register-profiles.component.html',
  styleUrls: ['./register-profiles.component.scss'],
})

export class RegisterProfilesComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'nameProfile', 'menus', 'details', 'edit'];
  dataSource: MatTableDataSource < any > ;
  resultsLength = 0;
  isLoadingResults = true;
  checkAll = false;
  isError: boolean;
  selected = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public profilesService: ProfilesService,
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
    this.profilesService.listProfiles().toPromise().then(returnQuery => {
      this.resultsLength = returnQuery.length;
      returnQuery.forEach(element => {
        element.checkbox = false;
      });
      this.dataSource = new MatTableDataSource(returnQuery);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }).catch(error => {
      let messageOptions: OptionsNotification;
      messageOptions = new OptionsNotification(`<span class="notification-content">Erro ao buscar Dados!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
      this.notification(messageOptions);
      this.isError = true;
      this.isLoadingResults = false;
    });
  }

  registerNewProfile() {
    const dialogRef = this.dialog.open(FormRegisterProfileComponent, {
      data: {
        changeProfile: false,
        nameProfile: ''
      },
      width: '99%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.profilesService.createProfile(result).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Perfil cadastrado com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 20000);
          this.notification(messageOptions);
          this.searchData();
        });
      }
    });
  }

  showMenus(index: number) {
    const dialogRef = this.dialog.open(TableMenusComponent, {
      data: {
        dataSource: this.dataSource.data[index].menus,
        nameProfile: this.dataSource.data[index].nameProfile,
      },
      width: '99%'
    });
  }

  updateProfile(index: number) {
    const dialogRef = this.dialog.open(FormRegisterProfileComponent, {
      data: {
        changeProfile: true,
        dataSource: this.dataSource.data[index].menus,
        nameProfile: this.dataSource.data[index].nameProfile,
        id: this.dataSource.data[index].id,
      },
      width: '99%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.profilesService.updateProfile(result).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Perfil alterado com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
          this.notification(messageOptions);
          this.searchData();
        });
      }
    });
  }

  deleteSelection() {
    const profiles: ProfileAccess[] = [];
    this.dataSource.data.forEach(element => {
      if (element.checkbox) {
        profiles.push(element);
      }
    });
    this.deleteProfile(profiles);
  }

  deleteProfile(profiles: ProfileAccess[]) {
    const dialogRef = this.dialog.open(ModalSimpleComponent, {
      data: {
        title: 'Excluír Perfil(s)',
      }
    });
    const content = `<span>[ ${profiles.length} ] Perfil(s) será(ão) excluído(s), deseja continuar?</span>`;
    dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(content);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let messageOptions: OptionsNotification;
        this.profilesService.deleteProfile(profiles).toPromise().then(returnQuery => {
          messageOptions = new OptionsNotification(`<span class="notification-content">Perfil(s) excluído(s) com sucesso!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'top', 'right', 5000);
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

  checkAllProfile() {
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
