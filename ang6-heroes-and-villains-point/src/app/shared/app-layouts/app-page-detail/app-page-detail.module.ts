import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppPageDetailComponent } from './app-page-detail.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatDialogModule, MatSnackBarModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppPageDetailComponent
  ],
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
  exports: [
    AppPageDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppPageDetailModule { }
