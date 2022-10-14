import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv',
  pure : true
})
export class AbvPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value < 0 || value > 100) {
      console.error('ABV cannot be negative');
      return value.toString();      
    }
    // return number in string format with internationalization 
    // (e.g. 5,5%)
    if(args.length === 1 && typeof args[0] === 'string' && (args[0] === '%' || args[0] === 'º')) {
      return value.toLocaleString('de-DE') + args[0];
    }
    return value.toLocaleString('de-DE') + '%';
  }

}
