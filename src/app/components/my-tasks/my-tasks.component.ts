import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthenticationService} from '../../shared/authentication.service';
import { IssueService } from '../../domain/issue.service';
import Issue from '../../domain/issue';

@Component({
  moduleId: module.id,
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.component.html',
  styleUrls: ['my-tasks.component.css'],
  providers: [IssueService, HTTP_PROVIDERS, AuthenticationService]
})
export class MyTasksComponent implements OnInit {
  myIssues: Array<Issue>
  selectedIssue: Issue
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.issueService.getIssues().subscribe(res => this.myIssues = res);
  }

  open() {

  }

  close(issue: Issue) {
    this.issueService.close(issue.repository.ownerName, issue.repository.name, issue.number)
      .subscribe(res => {
        this.selectedIssue = null;
        this.load();
      });
  }

  selectIssue(issue: Issue) {
    this.selectedIssue = issue;
  }

}
