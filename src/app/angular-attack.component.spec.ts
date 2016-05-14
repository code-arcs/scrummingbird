import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularAttackAppComponent } from '../app/angular-attack.component';

beforeEachProviders(() => [AngularAttackAppComponent]);

describe('App: AngularAttack', () => {
  it('should create the app',
      inject([AngularAttackAppComponent], (app: AngularAttackAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-attack works!\'',
      inject([AngularAttackAppComponent], (app: AngularAttackAppComponent) => {
    expect(app.title).toEqual('angular-attack works!');
  }));
});
