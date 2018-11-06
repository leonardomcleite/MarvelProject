import { EventEmitter, Injectable, Output } from '@angular/core';
import { PlayedModel } from 'src/app/models/played.model';

@Injectable()
export class GameService {

  @Output() turnGame: EventEmitter<number> = new EventEmitter();

  constructor() { }

  startGame() {

  }

  enterGame(any) {
    return any;
  }

  listLobbys() {

  }

  makeMove(played: PlayedModel) {
    return null;
  }

  roundPlayer(user) {
    return null;
  }

  roundWinner(user) {
    return null;
  }

  stageGame() {
    return null;
  }

}
