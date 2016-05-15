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
import { IssueDetailsPanelComponent } from './issue-details-panel.component';

describe('Component: IssueDetailsPanel', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IssueDetailsPanelComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([IssueDetailsPanelComponent],
      (component: IssueDetailsPanelComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IssueDetailsPanelComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(IssueDetailsPanelComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-issue-details-panel></app-issue-details-panel>
  `,
  directives: [IssueDetailsPanelComponent]
})
class IssueDetailsPanelComponentTestController {
}
