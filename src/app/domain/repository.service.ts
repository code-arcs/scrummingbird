import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthenticationService } from './../shared/authentication.service';
import Factory from './factory';

@Injectable()
export class RepositoryService {
  private factory: Factory;
  private apiUrl:string = "https://api.github.com";
  constructor(private http: Http, private authenticationService:AuthenticationService) {
    this.factory = new Factory();
  }

  public getRepositories() {
    return this.http.get(`${this.apiUrl}/user/repos`,{
        headers: this.authenticationService.getAuthedHeader()
      })
      .map(res => this.factory.translate('repository', res.json()));
  }

  public getRepository(ownerName:string, repoName:string){
    //const user = this.authenticationService.getAuthedUser();
    return this.http.get(`${this.apiUrl}/repos/${ownerName}/${repoName}`,{
          headers: this.authenticationService.getAuthedHeader()
        })
        .map(res => this.factory.translate('repository', res.json()));
  }

  public getCollaborators(ownerName:string, repoName:string){
    //GET /repos/:owner/:repo/collaborators
    return this.http.get(`${this.apiUrl}/repos/${ownerName}/${repoName}/collaborators`,{
          headers: this.authenticationService.getAuthedHeader()
        })
        .map(res => this.factory.translate('user', res.json()));
  }

}
