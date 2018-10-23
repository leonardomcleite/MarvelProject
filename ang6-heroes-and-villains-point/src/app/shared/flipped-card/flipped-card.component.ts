import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flipped-card',
  templateUrl: './flipped-card.html',
  styleUrls: ['./flipped-card.scss']
})
export class FlippedCardComponent {

  @Input() get rotate(): boolean {return this._rotate; }
  @Output() rotateChange: EventEmitter<boolean> = new EventEmitter();
  set rotate(val: boolean) {
    this._rotate = val;
    this.rotateChange.emit(val);
  }
  _rotate;

  @Input() width: string;
  @Input() height: string;

  constructor() {}
}
