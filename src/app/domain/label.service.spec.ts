import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LabelService } from './label.service';

describe('Label Service', () => {
  beforeEachProviders(() => [LabelService]);

  it('should ...',
      inject([LabelService], (service: LabelService) => {
    expect(service).toBeTruthy();
  }));
});
