import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { AddingCalendarComponent } from './calendar/adding-calendar/adding-calendar.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    CalendarComponent,
    AddingCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalendarModule { }
