import { Component } from '@angular/core';
import { OnActivate, RouteSegment, RouteTree, Router } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';
import {RepositoryService} from "../../domain/repository.service";
import {IssueService} from "../../domain/issue.service";
import {AuthenticationService} from "../../shared/authentication.service";
import Issue from "../../domain/issue";
import Repository from "../../domain/repository";

@Component({
  moduleId: module.id,
  selector: 'app-issue-create',
  templateUrl: 'issue-create.component.html',
  styleUrls: ['issue-create.component.css'],
  providers: [RepositoryService, HTTP_PROVIDERS, AuthenticationService, IssueService]
})
export class IssueCreateComponent implements OnActivate {
  repository:Repository = new Repository();
  routeSegment:RouteSegment;
  repoName:string;
  ownerName:string;
  issue:Issue = new Issue();
  constructor(private repositoryService:RepositoryService, private issueService:IssueService, private router:Router) {}

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    this.routeSegment = curr;

    this.repoName = this.routeSegment.getParam('repoName');
    this.ownerName = this.routeSegment.getParam('ownerName');

    this.repositoryService.getRepository(this.ownerName,this.repoName)
        .subscribe((repo) => this.repository = repo);
  }

  public create(issue){
    console.log("create called ", issue);
    this.issueService.create(this.ownerName, this.repoName, issue)
        .subscribe((issue) => {
          this.router.navigate([`/repositories/${this.ownerName}/${this.repoName}`]);
        });
  }
}
