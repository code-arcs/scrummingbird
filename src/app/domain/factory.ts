import {Repository} from './repository';

export class Factory {
  constructor() {
  }

  public translate(type: any, data: any) {
      console.log(type, data)

      return type === Repository.toString() ? data.map(r =>
          new Repository(r.id, r.name, r.full_name, r.url)) : 'error'
  }
}
