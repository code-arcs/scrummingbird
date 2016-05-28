import { Component, Input, Output, EventEmitter} from '@angular/core';
import Issue from "../../domain/Issue";

@Component({
  moduleId: module.id,
  selector: 'issue-list-item',
  templateUrl: 'issue-list-item.component.html',
  styleUrls: ['issue-list-item.component.css']
})
export class IssueListItemComponent {

  @Input() issue:Issue;
  @Output() issueSelected = new EventEmitter<Issue>();

  selectIssue(issue:Issue) {
    this.issueSelected.emit(issue);
  }
}
