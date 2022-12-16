import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCalendarComponent } from './adding-calendar.component';

describe('AddingCalendarComponent', () => {
  let component: AddingCalendarComponent;
  let fixture: ComponentFixture<AddingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
