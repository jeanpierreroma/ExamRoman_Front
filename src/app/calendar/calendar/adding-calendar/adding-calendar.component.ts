import { Component, Input } from '@angular/core';
import { Calendar } from '../../calendar';
import { CalendarService } from '../../calendar.service';
import { NgModel, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-adding-calendar',
  templateUrl: './adding-calendar.component.html',
  styleUrls: ['./adding-calendar.component.scss']
})
export class AddingCalendarComponent {
  constructor(private service : CalendarService) {
  }

  @Input()calendar !: Calendar
  id !: number;
  text !: string;
  time !: string;
  description !: string;
  frequency !: number;

  ngOnInit() {
    this.id = this.calendar.id;
    this.text = this.calendar.text;
    this.time = this.calendar.time;
    this.description = this.calendar.description;
    this.frequency = this.calendar.frequency;
  }

  addButtonInForm() {
    let c = {
      id : this.id,
      text : this.text,
      time : this.time,
      description : this.description,
      frequency : this.frequency
    }

    this.service.addCalendar(c).subscribe();
  }

  updateButtonInForm() {
    let c = {
      id : this.id,
      text : this.text,
      time : this.time,
      description : this.description,
      frequency : this.frequency
    }

    this.service.updateCalendar(this.id, c).subscribe();
  }
}
