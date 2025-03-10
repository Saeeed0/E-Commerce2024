import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cridetCard'
})
export class CridetCardPipe implements PipeTransform {

  transform(value: string): unknown {
    if(value.length!==16) return 'Invalid Cridet Card';
    let count=0;
    let newStr='';
    for (let i = 0; i < value.length; i+=4) {
      newStr+=value.slice(i,i+4)+'-';
    }
    return newStr.slice(0,-1);
  }

}
