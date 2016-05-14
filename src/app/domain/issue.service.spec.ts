import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { IssueService } from './issue.service';

describe('Issue Service', () => {
  beforeEachProviders(() => [IssueService]);

  it('should ...',
      inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
});
