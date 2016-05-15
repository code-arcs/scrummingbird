import { Component, OnInit,Input} from '@angular/core';
import Issue from '../../domain/issue'
import {CommentsComponent} from "../comments/comments.component";

@Component({
  moduleId: module.id,
  selector: 'app-issue-details-panel',
  templateUrl: 'issue-details-panel.component.html',
  styleUrls: ['issue-details-panel.component.css'],
  directives: [CommentsComponent]
})
export class IssueDetailsPanelComponent{

  @Input() issue:Issue;
  @Input() ownerName:String;
  @Input() repoName:String;

  constructor() {

  }

}
