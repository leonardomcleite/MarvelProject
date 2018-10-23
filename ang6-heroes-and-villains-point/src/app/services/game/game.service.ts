import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class GameService {

  @Output() turnGame: EventEmitter<number> = new EventEmitter();

  constructor() { }

}
