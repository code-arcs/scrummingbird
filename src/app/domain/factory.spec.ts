import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import Factory from './factory';

describe('factory translation', () => {
  beforeEachProviders(() => [Factory]);

  it('should translate repository',
    inject([Factory], (fac:Factory) => {
      expect(fac).toBeTruthy();
    }));

});
