import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent implements OnInit {
  @Output() dateSelected= new EventEmitter<Date>();

  selectedDay: number | null = null;

  DAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  MONTH_NAMES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  datepickerValue: string = '';
  showDatepicker = true;

  month: number = 0;
  year: number = 0;
  no_of_days: number[] = [];
  blankdays: number[] = [];

  ngOnInit() {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.getNoOfDays();
    this.selectedDay = today.getDate();
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

    this.blankdays = Array(firstDayOfMonth).fill(0);
    this.no_of_days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  isToday(date: number): boolean {
    const today = new Date();
    return date === today.getDate() &&
           this.month === today.getMonth() &&
           this.year === today.getFullYear();
  }

  getDateValue(date: number) {
    const selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.selectedDay = date;
    this.dateSelected.emit(selectedDate);
  }
}

