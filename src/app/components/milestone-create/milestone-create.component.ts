import { Component } from '@angular/core';
import { OnActivate, RouteSegment, RouteTree, Router } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';
import {RepositoryService} from "../../domain/repository.service";
import {MilestoneService} from "../../domain/milestone.service";
import {AuthenticationService} from "../../shared/authentication.service";
import Milestone from "../../domain/milestone";
import Repository from "../../domain/repository";

@Component({
  moduleId: module.id,
  selector: 'app-milestone-create',
  templateUrl: 'milestone-create.component.html',
  styleUrls: ['milestone-create.component.css'],
  providers: [RepositoryService, HTTP_PROVIDERS, AuthenticationService, MilestoneService]
})
export class MilestoneCreateComponent implements OnActivate {
  repository:Repository = new Repository();
  routeSegment:RouteSegment;
  repoName:string;
  ownerName:string;
  milestone:Milestone = new Milestone();
  constructor(private repositoryService:RepositoryService, private milestoneService:MilestoneService, private router:Router) {}

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    this.routeSegment = curr;

    this.repoName = this.routeSegment.getParam('repoName');
    this.ownerName = this.routeSegment.getParam('ownerName');

    this.repositoryService.getRepository(this.ownerName,this.repoName)
        .subscribe((repo) => this.repository = repo);
  }

  public create(milestone){
    console.log("create called ", milestone);
    this.milestoneService.create(this.ownerName, this.repoName, milestone)
        .subscribe((milestone) => {
          this.router.navigate([`/repositories/${this.ownerName}/${this.repoName}`]);
        });
  }
}
