import {Injectable} from '@angular/core';
import CrudService from './crud.service';

@Injectable()
export class IssueService extends CrudService {
  
  constructor() {
    super('issue');
  }
  

}
