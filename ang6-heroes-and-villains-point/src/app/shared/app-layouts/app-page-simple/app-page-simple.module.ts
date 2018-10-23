import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppPageSimpleComponent } from './app-page-simple.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatDialogModule, MatSnackBarModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppPageSimpleComponent
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
    AppPageSimpleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppPageSimpleModule { }
