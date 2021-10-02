import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoLength'
})
export class TodoMaxLengthPipe implements PipeTransform {

  transform(title: string): string {
    if(title.length > 100){
      return title.slice(0, 100).concat('...')
    }else {
      return title
    }
  }

}
