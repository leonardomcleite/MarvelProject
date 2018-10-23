import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppPageFullComponent } from './app-page-full.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatDialogModule, MatSnackBarModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppPageFullComponent
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
    AppPageFullComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppPageFullModule { }
