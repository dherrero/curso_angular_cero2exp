import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  private capitalizeWord(word: string) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  transform(value: string, todas: boolean = false): string {
    if (!todas)
      return this.capitalizeWord(value);
    else {
      return value.split(' ').reduce((acumulator: string, current: string) => `${acumulator} ${this.capitalizeWord(current)}`, '');
    }
  }

}
