import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GameService } from '../../services/game/game.service';

enum Stage {
  Start = 0,
  InGame = 1,
  EndGame = 2,
  GameOver = 3
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  stageGame = 0;
  subscription: Subscription[] = [];

  constructor(
    public gameService: GameService
  ) {}

  ngOnInit() {
    this.subscription.push(this.gameService.startGame.subscribe(observable => {
      this.stageGame = observable;
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

}
