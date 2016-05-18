import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "filterByAttribute"
})
export class FilterByAttributePipe implements PipeTransform {
  transform(array:Array<any>, args?) {
    return array.map(r => this.filter(r, args));
  }

  filter(array, args) {
      let [input] = args;
      return (array || []).filter(i => {
        console.log(i.labels, input)
        return i[input.key] === input.value;
      });
    }
  }
