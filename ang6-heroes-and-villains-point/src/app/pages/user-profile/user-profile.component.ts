import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserPersonalData } from 'src/app/models/user-personal-data.model';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationService } from '../../services/base-service/notification.service';
import { GuardService } from 'src/app/services/guard/guard.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {

  userLogged: UserPersonalData;

  constructor(
    public notificationService: NotificationService,
    public dialog: MatDialog,
    public guardService: GuardService
  ) {}

  ngOnInit() {
    this.userLogged = JSON.parse(sessionStorage.getItem('Perfis'));
    this.guardService.changeProfile.subscribe(profile => {
      this.userLogged = JSON.parse(sessionStorage.getItem('Perfis'));
    });
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

  openAvatares(avatar: string): void {
    const dialogRef = this.dialog.open(DialogAvataresComponent, {
      width: '250px',
      data: {
        avatar: avatar
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userLogged.avatar = result;
        const messageOptions = new OptionsNotification(`<span class="notification-content">Imagem alterada com sucesso!.</span>`, 'success', null, false, 'top', 'right', 5000);
        sessionStorage.setItem('Perfis', JSON.stringify(this.userLogged));
        this.guardService.changeProfile.emit();
        this.notification(messageOptions);
      }
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-avatares',
  template: `
    <h1 mat-dialog-title>Avatares</h1>
    <div mat-dialog-content>
      <p>Escolha um Avatar?</p>
      <div *ngFor="let avatar of avatares" class="content-avatares">
        <img class="avatar"
          [src]="'assets/images/Avatares/' + avatar"
          (click)="data.avatar = avatar">
        <mat-icon class="icon-checked" *ngIf="data.avatar === avatar">check_circle</mat-icon>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.avatar" cdkFocusInitial>Salvar</button>
    </div>
  `,
  styleUrls: ['./user-profile.component.scss'],
})
export class DialogAvataresComponent implements OnInit {

  avatares: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogAvataresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.avatares = ['Avatar_B_01.png', 'Avatar_B_02.png', 'Avatar_B_03.png', 'Avatar_G_01.png', 'Avatar_G_02.png', 'Avatar_G_03.png'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
