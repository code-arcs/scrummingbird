import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RepositoryDetailsComponent } from './repository-details.component';

describe('Component: RepositoryDetails', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RepositoryDetailsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RepositoryDetailsComponent],
      (component: RepositoryDetailsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RepositoryDetailsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RepositoryDetailsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-repository-details></app-repository-details>
  `,
  directives: [RepositoryDetailsComponent]
})
class RepositoryDetailsComponentTestController {
}

