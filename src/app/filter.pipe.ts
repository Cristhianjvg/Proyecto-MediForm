import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
    // Aquí es donde se implementa la lógica de filtrado
    return value.filter(item => item.id === args[0]);
  }
}


