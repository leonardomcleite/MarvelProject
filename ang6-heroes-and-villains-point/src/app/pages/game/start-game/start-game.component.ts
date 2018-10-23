import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  color = 'green';

  constructor(
    public gameService: GameService
  ) {}

  start() {
    this.gameService.startGame.emit(1);
  }

}
