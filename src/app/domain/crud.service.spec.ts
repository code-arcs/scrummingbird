import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('Crud Service', () => {
  beforeEachProviders(() => [CrudService]);

  it('should ...',
      inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
