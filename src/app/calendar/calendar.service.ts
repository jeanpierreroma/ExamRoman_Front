import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getAllCalendars() : Observable<any[]> {
    return this.http.get<any[]>("https://localhost:5001/api/Calendar/get-all");
  }

  addCalendar(c : any) {
    return this.http.post("https://localhost:5001/api/Calendar/add-calendar", c)
  }

  updateCalendar(id : number, c : any) {
    return this.http.put(`https://localhost:5001/api/Calendar/update-calendar/${id}`, c)
  }

  deleteCalendar(id : number) {
    return this.http.delete(`https://localhost:5001/api/Calendar/delete-calendar/${id}`)
  }

  findByWord(word : string) : Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:5001/api/Calendar/get-calendar-by-word/${word}`)
  }

  findById(id : number) : Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:5001/api/Calendar/get-calendar-by-id/${id}`)
  }
}
