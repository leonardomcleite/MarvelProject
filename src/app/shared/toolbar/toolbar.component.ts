import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EventReceived } from '../../models/event-received.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  clickMenu: EventReceived = new EventReceived();
  @Output() clickMenuChange: EventEmitter<EventReceived> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setSidenav() {
    this.clickMenu.type = 'sidenav';
    this.clickMenu.status = !this.clickMenu.status;
    this.clickMenuChange.emit(this.clickMenu);
  }

}
