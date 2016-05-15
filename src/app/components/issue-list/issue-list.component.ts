import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {IssueService} from '../../domain/issue.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-issue-list',
  templateUrl: 'issue-list.component.html',
  styleUrls: ['issue-list.component.css'],
  providers: [IssueService, AuthenticationService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
export class IssueListComponent implements OnInit {
  @Input() repoName:string;
  @Input() ownerName:string;
  issues:any;

  constructor(private is:IssueService) {}

  ngOnInit() {
    this.is.get(this.ownerName, this.repoName).subscribe(issues => {this.issues = issues});
  }

}
