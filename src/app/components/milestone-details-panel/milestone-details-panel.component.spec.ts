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
import { MilestoneDetailsPanelComponent } from './milestone-details-panel.component';

describe('Component: MilestoneDetailsPanel', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MilestoneDetailsPanelComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MilestoneDetailsPanelComponent],
      (component: MilestoneDetailsPanelComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MilestoneDetailsPanelComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MilestoneDetailsPanelComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-milestone-details-panel></app-milestone-details-panel>
  `,
  directives: [MilestoneDetailsPanelComponent]
})
class MilestoneDetailsPanelComponentTestController {
}
