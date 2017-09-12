import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nomePipe'})
export class NomePipe implements PipeTransform {
  transform(value: string, value2: string): string {
    return value2 + " " + value2;
  }
}
