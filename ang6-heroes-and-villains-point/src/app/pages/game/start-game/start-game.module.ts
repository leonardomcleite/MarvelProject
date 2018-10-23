import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSnackBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { StartGameComponent } from './start-game.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  declarations: [
    StartGameComponent
  ],
  exports: [
    StartGameComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartGameModule { }
