import { Component, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-rotate',
  templateUrl: './card-rotate.component.html',
  styleUrls: ['./card-rotate.component.scss']
})
export class CardRotateComponent implements OnDestroy {

  timer: any;
  flipTimeOut: boolean;
  flip: boolean;

  @Input() indexCard: any;

  @Input() get flippedCard(): any {return this._flippedCard; }
  @Output() flippedCardChange: EventEmitter<any> = new EventEmitter();
  set flippedCard(val: any) {
    this._flippedCard = val;
    this.flippedCardChange.emit(val);
    if (this.indexCardClicked === this.indexCard) {
      this.flip = !this.flip;
      this.timer = setTimeout(() => {
        this.flipTimeOut = val;
      }, 300);
    }
  }
  _flippedCard;

  @Input() get indexCardClicked(): any {return this._indexCardClicked; }
  @Output() indexCardClickedChange: EventEmitter<any> = new EventEmitter();
  set indexCardClicked(val: any) {
    this._indexCardClicked = val;
    this.indexCardClickedChange.emit(val);
    this.timer = setTimeout(() => {
      this.flipTimeOut = val;
    }, 300);
  }
  _indexCardClicked;

  constructor() {}

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}

