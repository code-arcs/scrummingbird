import {Injectable} from '@angular/core';
import CrudService from './crud.service';

@Injectable()
export class LabelService extends CrudService {
  
  constructor() {
    super('label');
  }
}
