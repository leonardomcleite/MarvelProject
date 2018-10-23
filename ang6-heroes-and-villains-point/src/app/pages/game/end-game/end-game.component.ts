import { Component } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

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
    this.gameService.startGame.emit(0);
  }

}
