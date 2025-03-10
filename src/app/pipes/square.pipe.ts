import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
})
export class SquarePipe implements PipeTransform {
  transform(value: number,x:number=2): number {
    return Math.pow(value,x);
  }
}
