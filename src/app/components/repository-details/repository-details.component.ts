import { Component } from '@angular/core';
import { OnActivate, RouteSegment, RouteTree } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { RepositoryService } from './../../domain/repository.service';
import { AuthenticationService } from './../../shared/authentication.service';
import Repository from './../../domain/repository';

@Component({
  moduleId: module.id,
  selector: 'app-repository-details',
  templateUrl: 'repository-details.component.html',
  styleUrls: ['repository-details.component.css'],
  providers: [RepositoryService, HTTP_PROVIDERS, AuthenticationService]
})
export class RepositoryDetailsComponent implements OnActivate {
  routeSegment:RouteSegment;
  repository:Repository;

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    this.routeSegment = curr;
  }

  constructor(private repositoryService:RepositoryService) {}

  ngOnInit() {
    this.repositoryService.getRepository(this.routeSegment.getParam('repoName'))
        .subscribe((repo) => this.repository = repo);
  }

}
