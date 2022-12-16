import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Calendar } from '../calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  constructor(private service: CalendarService) {

  }

  wordField !: string
  idField !: number
  calendars !: Calendar[]
  calendar !: Calendar
  isPressButton !: boolean

  ngOnInit() {
    this.getGetAllCalendars();
  }

  private getGetAllCalendars() {
    this.service.getAllCalendars().subscribe(d => this.calendars = d);
  }

  addCalendar() {
    this.calendar = {
      id : 0,
      text : "",
      time : "",
      description : "",
      frequency : 0
    }
    this.isPressButton = true;
  }

  close() {
    this.isPressButton = false;
    this.getGetAllCalendars();
  }

  update(calendar : Calendar) {
    this.calendar = calendar;
    this.isPressButton = true;
  }

  delete(calendar : Calendar) {
    this.service.deleteCalendar(calendar.id).subscribe();
  }

  findByWord() {
    if(this.wordField == "") {
      this.getGetAllCalendars();
    } else {
      this.service.findByWord(this.wordField).subscribe(d => this.calendars = d)
    }
  }

  findById() {
    if(this.idField === 0) {
      this.getGetAllCalendars();
    } else {
      this.service.findById(this.idField).subscribe(d => this.calendars = d)
    }
  }
}
