import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {IssueService} from '../../domain/issue.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {MilestoneService} from "../../domain/milestone.service";

@Component({
  moduleId: module.id,
  selector: 'app-milestone-list',
  templateUrl: 'milestone-list.component.html',
  styleUrls: ['milestone-list.component.css'],
  providers: [IssueService, AuthenticationService, MilestoneService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, TOOLTIP_DIRECTIVES]
})

export class MilestoneListComponent implements OnInit {
  @Input() repoName:string;
  @Input() ownerName:string;
  @Output() selectedItem = new EventEmitter<any>();

  issues:any;
  milestones:any;
  backlogIssues:any;
  milestonesIssue:any = {};
  detailItem:any;

  constructor(private is:IssueService, private ms:MilestoneService) {
  }

  ngOnInit() {
    this.is.get(this.ownerName, this.repoName)
      .subscribe(issues => {
        this.issues = issues;
        this.milestones = issues.map(i => i.milestone)
          .filter((value, index, self) => {
            return value ? self.map(m => m ? m.number : null)
              .indexOf(value.number) === index : false
          });

        this.ms.get(this.ownerName, this.repoName)
          .subscribe(milestones => {
            this.milestones = milestones;

            this.milestones.forEach(mile => {
              this.milestonesIssue[mile.number] = this.getIssuesForMilestone(mile);
            });

            this.backlogIssues = this.issues.filter(i => !i.milestone);
          });
      });
  }

  getIssuesForMilestone(milestone) {
    return this.issues.filter(i => i.milestone && i.milestone.number === milestone.number);
  }

  showDetails(item) {
    this.selectedItem.emit(item);
  }
}
