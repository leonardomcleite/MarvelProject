import { Component } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  constructor(
    public gameService: GameService
  ) {}

  start() {
    this.gameService.turnGame.emit(1);
  }

}
