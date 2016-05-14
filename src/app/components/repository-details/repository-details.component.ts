import { Component } from '@angular/core';
import { OnActivate, RouteSegment, RouteTree } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { RepositoryService } from './../../domain/repository.service';
import { AuthenticationService } from './../../shared/authentication.service';
import Repository from './../../domain/repository';
import {MilestoneListComponent} from "../milestone-list/milestone-list.component";
import {IssueListComponent} from "../issue-list/issue-list.component";

@Component({
  moduleId: module.id,
  selector: 'app-repository-details',
  templateUrl: 'repository-details.component.html',
  styleUrls: ['repository-details.component.css'],
  providers: [RepositoryService, HTTP_PROVIDERS, AuthenticationService],
  directives: [MilestoneListComponent, IssueListComponent]
})
export class RepositoryDetailsComponent implements OnActivate {
  routeSegment:RouteSegment;
  repository:Repository = new Repository();
  repoName:string;
  ownerName:string;

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    this.routeSegment = curr;
  }

  constructor(private repositoryService:RepositoryService) {}

  ngOnInit() {
    this.repoName = this.routeSegment.getParam('repoName');
    this.ownerName = this.routeSegment.getParam('ownerName');

    this.repositoryService.getRepository(this.ownerName,this.repoName)
        .subscribe((repo) => this.repository = repo);
  }

}
