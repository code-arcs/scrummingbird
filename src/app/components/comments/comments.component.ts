import { Component, OnChanges, Input } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthenticationService} from '../../shared/authentication.service';
import { IssueService } from '../../domain/issue.service';
import Issue from '../../domain/issue';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.css'],
  providers: [IssueService, HTTP_PROVIDERS, AuthenticationService],
  directives: [ACCORDION_DIRECTIVES]
})
export class CommentsComponent implements OnChanges {

  ngOnChanges(changes) {
    this.loadComments(this.issue);
  }

  @Input() issue:Issue;
  @Input() ownerName:String;
  @Input() repoName:String;

  issueComments: any;
  createCommentMsg:string;
  constructor(private issueService:IssueService) {}



  loadComments(issue:Issue) {
    if(!this.issue.repository) {
      this.issue.repository = {};
    }
    this.issueComments = this.issueService.getComments(this.issue.repository.ownerName || this.ownerName, this.issue.repository.name || this.repoName, this.issue.number);
  }


  createComment(issue:Issue, createComment:string) {
    this.issueService.createComments(this.issue.repository.ownerName || this.ownerName, this.issue.repository.name || this.repoName, this.issue.number, createComment)
      .subscribe((res) => {
        this.loadComments(issue);
        this.createCommentMsg="";
      });
  }

}
