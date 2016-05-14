import { Injectable } from '@angular/core';
import { Repository } from './repository';

@Injectable()
export class RepositoryService {

  constructor() {}
  
  public abc(){
    const repo: any = new Repository('abc', 'asd', 'adadg');
    
    return repo.test();
  }

}
