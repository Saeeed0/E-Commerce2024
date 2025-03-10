import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
})
export class NationalIdPipe implements PipeTransform {
  // constructor(private datePipe: DatePipe) {}
  transform(value: string, format: string = 'FullDate'): string {
    let year = 0,
      month = 0,
      day = 0;
    if (value.length !== 14) return 'Invalid National ID';
    
      year = this.getYear(value);
      month = this.getMonth(value);
      day = this.getDay(value);

      const birthDate = new Date(year, month - 1, day);

      return this.formatBirthDate(birthDate,format);
    
  }
  formatBirthDate(date:Date,format: string): string {
    // if (format == 'FullDate') return this.datePipe.transform(date, 'dd-MM-yyyy')||'';
    if (format == 'FullDate') return date.toLocaleDateString();
    else if (format == 'Year') return date.getFullYear().toString();
    else if (format == 'Month') return (date.getMonth() + 1).toString();
    else if (format == 'Day') return date.getDate().toString();
    else return date.toLocaleDateString();
    
  }
  getYear(value: string): number {
    return this.getAlfia(value) + parseInt(value.substring(1, 3));
  }
  getMonth(value: string): number {
    return parseInt(value.substring(3, 5));
  }
  getDay(value: string): number {
    return parseInt(value.substring(5, 7));
  }
  getAlfia(value: string): number {
    let alfia = value.charAt(0);

    switch (alfia) {
      case '2':
        return 1900;
      case '3':
        return 2000;
      default:
        throw new Error('Invalid National ID');
    }
  }
}
