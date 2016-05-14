import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MilestoneService } from './milestone.service';

describe('Milestone Service', () => {
  beforeEachProviders(() => [MilestoneService]);

  it('should ...',
      inject([MilestoneService], (service: MilestoneService) => {
    expect(service).toBeTruthy();
  }));
});