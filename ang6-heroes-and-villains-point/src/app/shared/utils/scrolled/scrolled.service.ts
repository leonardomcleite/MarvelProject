import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ScrolledService {

  @Output() scrollDown: EventEmitter<void> = new EventEmitter<void>();
  @Output() fixedPosition: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

}
