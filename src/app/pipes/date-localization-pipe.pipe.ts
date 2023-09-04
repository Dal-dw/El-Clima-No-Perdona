import { Pipe, PipeTransform } from '@angular/core';

const daysOfWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

@Pipe({
  name: 'dateLocalization',
})
export class DateLocalizationPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return daysOfWeek[date.getDay()];
  }
}
