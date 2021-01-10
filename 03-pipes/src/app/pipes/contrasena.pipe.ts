import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activated: boolean = true): string {
    if (!activated) return value;
    return value.split('').reduce((acumulator: string) => `${acumulator}*`, '');
  }

}
