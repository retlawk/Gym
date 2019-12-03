import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined){
      return value.toFixed(2).toString().replace('.', ':');
    }
    else {
      return "0:00";
    }
  }

}
