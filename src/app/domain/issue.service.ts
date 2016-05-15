import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import Factory from './factory';
import {AuthenticationService} from './../shared/authentication.service';

@Injectable()
export class IssueService {
  private owner:String;
  private type:string = 'issue';
  private apiUrl:String = "https://api.github.com";
  private factory:Factory;

  constructor(private http:Http, private authenticationService:AuthenticationService) {
    this.factory = new Factory();
  }

  public getIssues() {
    const url = `${this.apiUrl}/issues`;
    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res =>this.factory.translate(this.type, res.json()));
  }

  public get(ownerName:string, repoName:string) {
    const url = `${this.apiUrl}/repos/${ownerName}/${repoName}/issues`;

    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res =>this.factory.translate(this.type, res.json()));
  }

  public getOne(repoName:string, number:any) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public create(ownerName:string, repoName:string, issue:any) {
    const url = `${this.apiUrl}/repos/${ownerName}/${repoName}/issues`;
    return this.http.post(url, issue.toJson(), {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate('this.type', res.json()));
  }

  public update(repoName:string, number:any, obj:any) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.patch(url, obj.toJson(), {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public delete(repoName:string, number:any) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.delete(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }
}
