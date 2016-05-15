import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthenticationService} from '../../shared/authentication.service';
import { IssueService } from '../../domain/issue.service';
import Issue from '../../domain/issue';
import {FilterByPipe} from '../../pipes/filterBy';

import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';
import {CommentsComponent} from "../comments/comments.component";

@Component({
  moduleId: module.id,
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.component.html',
  styleUrls: ['my-tasks.component.css'],
  providers: [IssueService, HTTP_PROVIDERS, AuthenticationService],
  pipes: [FilterByPipe],
  directives: [ACCORDION_DIRECTIVES, CommentsComponent]
})
export class MyTasksComponent implements OnInit {
  myIssues: any;
  selectedIssue: Issue;
  filterValue:string;

  constructor(private issueService: IssueService) {
    this.filterValue = '';
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.myIssues = this.issueService.getIssues();
  }

  onKey(event:any) {
    this.filterValue = event.target.value;
  }

  close(issue: Issue) {
    this.issueService.update(issue.repository.ownerName, issue.repository.name, issue.number, {state: 'closed'})
      .subscribe(res => {
        this.selectedIssue = null;
        this.load();
      });
  }

  unassign(issue: Issue) {
    this.issueService.update(issue.repository.ownerName, issue.repository.name, issue.number, {assignee: ''})
      .subscribe(res => {
        this.selectedIssue = null;
        this.load();
      });
  }

  selectIssue(issue: Issue) {
    this.selectedIssue = issue;
  }



}
