import { Component, Input} from '@angular/core';
import Issue from '../../domain/issue'

@Component({
  moduleId: module.id,
  selector: 'app-issue-details-panel',
  templateUrl: 'issue-details-panel.component.html',
  styleUrls: ['issue-details-panel.component.css']
})
export class IssueDetailsPanelComponent {

  @Input() issue:Issue;

  constructor() {}

}
