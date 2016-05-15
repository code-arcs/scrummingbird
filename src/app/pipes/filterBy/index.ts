import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "filterBy"
})
export class FilterByPipe implements PipeTransform {
  transform(array:Array<any>, args?) {
    return array.map(r => this.filter(r, args));
  }

  filter(array, args) {
      let [input] = args;
      return (array || []).filter(i => {
        return input === '*' || (i.name || i.title).toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
    }
  }
