import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSnackBarModule, MatTabsModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { InGameComponent } from './in-game.component';
import { FlippedCardModule } from '../../../shared/flipped-card/flipped-card.module';
import { ReverseModule } from 'src/app/pipes/ngFor-inverse/ngFor-inverse.module';

@NgModule({
  imports: [
    CommonModule,
    FlippedCardModule,

    ReverseModule,

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
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    InGameComponent
  ],
  exports: [
    InGameComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InGameModule { }
