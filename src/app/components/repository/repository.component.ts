import {Component, OnInit} from '@angular/core';
import {RepositoryService} from '../../domain/repository.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {OrderByPipe} from '../../pipes/orderBy';

@Component({
  moduleId: module.id,
  selector: 'app-repository',
  templateUrl: 'repository.component.html',
  styleUrls: ['repository.component.css'],
  providers: [RepositoryService, AuthenticationService, HTTP_PROVIDERS],
  pipes: [OrderByPipe]
})
export class RepositoryComponent implements OnInit {
  repositories:any;

  constructor(private rs:RepositoryService) {
  }

  ngOnInit() {
    this.repositories = this.rs.getRepositories();
  }

}
