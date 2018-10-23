import { Component } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

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
    this.gameService.startGame.emit(0);
  }

}
