import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatSnackBarModule, MatTabsModule } from '@angular/material';
import { NotificationComponent } from './notification.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ],
  entryComponents: [
    NotificationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule { }
