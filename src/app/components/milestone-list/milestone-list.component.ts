import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MilestoneService} from '../../domain/milestone.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-milestone-list',
  templateUrl: 'milestone-list.component.html',
  styleUrls: ['milestone-list.component.css'],
  providers: [MilestoneService, AuthenticationService, HTTP_PROVIDERS],
  directives:[ROUTER_DIRECTIVES]
})
export class MilestoneListComponent implements OnInit {
  @Input() repoName:string;
  @Input() ownerName:string;
  milestones:any;

  constructor(private ms:MilestoneService) {}

  ngOnInit() {
    this.ms.get(this.ownerName, this.repoName).subscribe(milestones => {this.milestones = milestones});
  }

}
