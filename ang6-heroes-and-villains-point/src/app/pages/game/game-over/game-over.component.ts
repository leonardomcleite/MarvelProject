import { Component } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

enum Stage {
  Start = 0,
  InGame = 1,
  EndGame = 2,
  GameOver = 3
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {

  constructor(
    public gameService: GameService,
  ) {}

  restart() {
    this.gameService.turnGame.emit(Stage.Start);
  }

}
