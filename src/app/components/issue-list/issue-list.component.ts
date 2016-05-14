import {Component, OnInit, Input} from '@angular/core';
import {IssueService} from '../../domain/issue.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-issue-list',
  templateUrl: 'issue-list.component.html',
  styleUrls: ['issue-list.component.css'],
  providers: [IssueService, AuthenticationService, HTTP_PROVIDERS]
})
export class IssueListComponent implements OnInit {
  @Input() repoName:string;
  issues:any;

  constructor(private is:IssueService) {}

  ngOnInit() {
    this.is.get(this.repoName).subscribe(issues => {this.issues = issues});
  }

}