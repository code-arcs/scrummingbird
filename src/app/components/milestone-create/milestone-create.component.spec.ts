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
import { MilestoneCreateComponent } from './milestone-create.component';

describe('Component: MilestoneCreate', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MilestoneCreateComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MilestoneCreateComponent],
      (component: MilestoneCreateComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MilestoneCreateComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MilestoneCreateComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-milestone-create></app-milestone-create>
  `,
  directives: [MilestoneCreateComponent]
})
class MilestoneCreateComponentTestController {
}
