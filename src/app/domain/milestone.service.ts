import {Injectable} from '@angular/core';
import CrudService from './crud.service';

@Injectable()
export class MilestoneService extends CrudService {
  
  constructor() {
    super('milestone');
  }

}
