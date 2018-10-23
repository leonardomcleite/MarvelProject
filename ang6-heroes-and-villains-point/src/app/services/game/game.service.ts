import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class GameService {

  @Output() startGame: EventEmitter<number> = new EventEmitter();

  constructor() { }

}
