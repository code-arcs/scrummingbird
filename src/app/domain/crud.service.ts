import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import Factory from './factory';
import {AuthenticationService} from './../shared/authentication.service';

@Injectable()
export default class CrudService {
  owner:String;
  private apiUrl:String = "https://api.github.com";
  private factory:Factory;
  private http:Http;
  private authenticationService:AuthenticationService

  constructor(private type:string) {
  }

  public get(repoName:string) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}`;
    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public getOne(repoName:string, number:any) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public create(repoName:string, obj:any) {
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}`;
    return this.http.post(url, obj.toJson(), {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
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
