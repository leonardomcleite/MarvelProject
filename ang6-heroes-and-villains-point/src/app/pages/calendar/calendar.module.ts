import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule,
  ],
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarModule { }
