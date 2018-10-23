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
  selector: 'end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent {

  constructor(
    public gameService: GameService,
  ) {}

  restart() {
    this.gameService.turnGame.emit(Stage.Start);
  }

}
