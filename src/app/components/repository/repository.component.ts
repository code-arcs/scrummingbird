import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../domain/repository.service';
import { HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-repository',
  templateUrl: 'repository.component.html',
  styleUrls: ['repository.component.css'],
  providers: [RepositoryService, HTTP_PROVIDERS]
})
export class RepositoryComponent implements OnInit {

  constructor(private rs: RepositoryService) {}

  ngOnInit() {
    console.log("sdgsg");
    this.rs.getRepositories().subscribe(res => {console.log(res)});
  }

}
