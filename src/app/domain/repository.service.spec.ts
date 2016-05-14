import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {RepositoryService} from './repository.service';

describe('Repository Service', () => {
  beforeEachProviders(() => [RepositoryService]);

  it('should ...',
    inject([RepositoryService], (service:RepositoryService) => {
      expect(service).toBeTruthy();
    }));
  
});
