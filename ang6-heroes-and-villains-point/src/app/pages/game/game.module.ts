import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSnackBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { EndGameModule } from './end-game/end-game.module';
import { GameOverModule } from './game-over/game-over.module';
import { GameComponent } from './game.component';
import { InGameModule } from './in-game/in-game.module';
import { StartGameModule } from './start-game/start-game.module';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    StartGameModule,
    InGameModule,
    EndGameModule,
    GameOverModule,

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
    GameComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameModule { }
