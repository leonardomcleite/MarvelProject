import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  events: any = [];
  header: any = {};

  constructor() {}

  ngOnInit(): void {
    this.events.push({
      id: 0,
      title: 'a',
      start: 'a',
      end: 'a',
      allDay: true
    });

    this.header = {
      left: 'prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

}
