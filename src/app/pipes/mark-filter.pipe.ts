import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markFilter'
})
export class MarkFilterPipe implements PipeTransform {

  transform(colorMark: object): [string, any][] {
    let array = Object.entries(colorMark)
    return array.filter(el=>{
      return el[1].isActive
    })
  }

}
