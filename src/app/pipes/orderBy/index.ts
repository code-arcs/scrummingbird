import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(array:Array<any>, args?) {
    return array.map(r => this.sort(r, args));
  }

  sort(array, args) {
    if (array) {
      let orderByValue = args[0];
      let byVal = 1;
      if (orderByValue.charAt(0) == "!") {
        byVal = -1;
        orderByValue = orderByValue.substring(1)
      }

      array.sort((a:any, b:any) => {
        if (a[orderByValue] < b[orderByValue]) {
          return -1 * byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1 * byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}
