import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {TOOLTIP_DIRECTIVES, TYPEAHEAD_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {AuthenticationService} from '../../shared/authentication.service';
import {MilestoneService} from "../../domain/milestone.service";
import {IssueService} from "../../domain/issue.service";
import {RepositoryService} from "../../domain/repository.service";

@Component({
  moduleId: module.id,
  selector: 'app-milestone-list',
  templateUrl: 'milestone-list.component.html',
  styleUrls: ['milestone-list.component.css'],
  providers: [IssueService, AuthenticationService, MilestoneService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, TOOLTIP_DIRECTIVES, TYPEAHEAD_DIRECTIVES]
})

export class MilestoneListComponent implements OnInit {
  @Input() repoName:string;
  @Input() ownerName:string;
  @Output() selectedItem = new EventEmitter<any>();

  issues:any;
  milestones:any;
  backlogIssues:any;
  milestonesIssue:any = {};
  users:any;


  public selected:any = {};
  public selectedUser:any = {};
  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;

  constructor(private is:IssueService, private ms:MilestoneService, private rs:RepositoryService) {
  }

  ngOnInit() {
    this.is.get(this.ownerName, this.repoName)
      .subscribe(issues => {
        this.issues = issues;

        this.ms.get(this.ownerName, this.repoName)
          .subscribe(milestones => {
            this.milestones = milestones;

            this.milestones.forEach(mile => {
              this.milestonesIssue[mile.number] = this.getIssuesForMilestone(mile);
            });

            this.backlogIssues = this.issues.filter(i => !i.milestone);
          });


          this.rs.getCollaborators(this.ownerName, this.repoName)
            .subscribe(user => {
              this.users = user;
            })
      });
  }

  getIssuesForMilestone(milestone) {
    return this.issues.filter(i => i.milestone && i.milestone.number === milestone.number);
  }

  showDetails(item) {
    this.selectedItem.emit(item);
  }

  public changeTypeaheadNoResults(e:boolean):void {
    this.typeaheadNoResults = e;
  }

  public typeaheadOnSelect(e:any, number:number):void {
    this.is.update(this.ownerName, this.repoName, number, {milestone: e.item.number})
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public typeaheadOnSelectUser(e:any, number:number):void {
    this.is.update(this.ownerName, this.repoName, number, {assignee	: e.item.name})
      .subscribe(() => {
        this.ngOnInit();
      });

  }


}
