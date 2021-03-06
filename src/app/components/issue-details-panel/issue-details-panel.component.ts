import { Component, Input} from '@angular/core';
import Issue from '../../domain/issue'
import {CommentsComponent} from "../comments/comments.component";
import {AuthenticationService} from "../../shared/authentication.service";
import Label from '../../domain/label'
import {LabelService} from '../../domain/label.service'
import {IssueService} from '../../domain/issue.service'

@Component({
  moduleId: module.id,
  selector: 'app-issue-details-panel',
  templateUrl: 'issue-details-panel.component.html',
  styleUrls: ['issue-details-panel.component.css'],
  directives: [CommentsComponent],
  providers: [IssueService, LabelService, AuthenticationService]
})
export class IssueDetailsPanelComponent  {
  @Input() issue:Issue;
  @Input() ownerName:string;
  @Input() repoName:string;

  guesses:Array<Label> = [];
  authedUser;

  constructor(private ls:LabelService, private is:IssueService, private as:AuthenticationService) {
    this.guesses = Label.createLabels();
    this.authedUser = as.getAuthedUser();
  }

  closeIssue(issue:Issue) {
    this.is.update(this.ownerName, this.repoName, issue.number, {state: 'closed'})
      .subscribe(r => {
        issue.state = r.state;
      });
  }

  setGuess(issue:Issue, label:Label) {
    console.log(issue);
    issue.labels = (issue.labels || []).filter(m => m.color.toLowerCase() !== label.color.toLowerCase());
    issue.labels.push(label);

    this.is.update(this.ownerName, this.repoName, issue.number, {labels: issue.labels})
      .subscribe(r => console.log(r));
  }
}
