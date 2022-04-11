import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
   let currentDate:any = new Date().getTime();
   let dateDiff:any = Math.abs(value - currentDate);
   let dateDiffSeconds = dateDiff * 0.001;
   let dateCounter = dateDiffSeconds / 86400;
   let hoursCounter = (dateDiffSeconds / 3600) % 60;
   let minutesCounter = (dateDiffSeconds /60) % 60;
   let secondsCounter = dateDiffSeconds % 60;

    if (dateCounter >= 1){
      return dateCounter;
    } else if(hoursCounter >= 1){
      return hoursCounter;
    } else if(minutesCounter <= 60) {
      return minutesCounter;
    } else {
      return secondsCounter;
    }
    }

}
