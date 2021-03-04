import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pzIndex'
})
export class PzIndexPipe implements PipeTransform {

  transform(value: number, defaultValue: number, ...args: unknown[]): number {
    if(value) {
      return value;
    }
    return defaultValue;
  }

}
