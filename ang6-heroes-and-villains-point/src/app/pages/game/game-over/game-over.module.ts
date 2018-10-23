import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSnackBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { GameOverComponent } from './game-over.component';

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
    GameOverComponent
  ],
  exports: [
    GameOverComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameOverModule { }
