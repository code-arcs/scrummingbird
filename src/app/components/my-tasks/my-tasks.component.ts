import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthenticationService} from '../../shared/authentication.service';
import { IssueService } from '../../domain/issue.service';

@Component({
  moduleId: module.id,
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.component.html',
  styleUrls: ['my-tasks.component.css'],
  providers: [IssueService, HTTP_PROVIDERS, AuthenticationService]
})
export class MyTasksComponent implements OnInit {
  myIssues: any
  selectedIssue: any
  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe(res => this.myIssues = res);
  }

}
