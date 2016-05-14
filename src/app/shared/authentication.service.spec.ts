import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('Authentication Service', () => {
  beforeEachProviders(() => [AuthenticationService]);

  it('should ...',
      inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
