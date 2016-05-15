import {Component} from '@angular/core';
import {OnActivate, RouteSegment, RouteTree, Routes} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {TAB_DIRECTIVES} from 'ng2-bootstrap'

import {RepositoryService} from './../../domain/repository.service';
import {LabelService} from './../../domain/label.service';
import {LabelColor} from './../../domain/label';
import Label from './../../domain/label';
import {AuthenticationService} from './../../shared/authentication.service';
import Repository from './../../domain/repository';
import Milestone from './../../domain/milestone';
import Issue from './../../domain/issue';
import {MilestoneListComponent} from "../milestone-list/milestone-list.component";
import {MilestoneDetailsPanelComponent} from "../milestone-details-panel/milestone-details-panel.component";
import {IssueListComponent} from "../issue-list/issue-list.component";
import {IssueDetailsPanelComponent} from "../issue-details-panel/issue-details-panel.component";

@Component({
  moduleId: module.id,
  selector: 'app-repository-details',
  templateUrl: 'repository-details.component.html',
  styleUrls: ['repository-details.component.css'],
  providers: [LabelService, RepositoryService, HTTP_PROVIDERS, AuthenticationService],
  directives: [MilestoneDetailsPanelComponent, IssueDetailsPanelComponent, MilestoneListComponent, IssueListComponent, TAB_DIRECTIVES]
})
export class RepositoryDetailsComponent implements OnActivate {
  routeSegment:RouteSegment;
  repository:Repository = new Repository();
  repoName:string;
  ownerName:string;
  selectedIssue:Issue;
  selectedMilestone:Milestone;
  hasRequiredLabels:boolean;

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    this.routeSegment = curr;
  }

  constructor(private repositoryService:RepositoryService, private labelService:LabelService) {
  }

  ngOnInit() {
    this.repoName = this.routeSegment.getParam('repoName');
    this.ownerName = this.routeSegment.getParam('ownerName');

    this.repositoryService.getRepository(this.ownerName, this.repoName)
      .subscribe((repo) => this.repository = repo);

    this.labelService.get(this.ownerName, this.repoName)
      .subscribe(l => {
        let any = l.some(l => l.color.toUpperCase() === LabelColor);
        if (!any) {
    Label.createLabels().forEach(l => this.labelService.create(this.ownerName, this.repoName, l))
        }
      });

  }

  itemSelected(selectedItem) {
    this.selectedIssue = this.selectedMilestone = null;
    if (selectedItem instanceof Milestone) {
      this.selectedMilestone = selectedItem;
    } else if (selectedItem instanceof Issue) {
      this.selectedIssue = selectedItem;
    }
  }
}
