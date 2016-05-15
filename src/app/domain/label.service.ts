import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import Factory from './factory';
import Label from './label';
import Issue from './issue';
import {AuthenticationService} from './../shared/authentication.service';

@Injectable()
export class LabelService {
  private owner:String;
  private type:string = 'labels';
  private apiUrl:String = "https://api.github.com";
  private factory:Factory;

  constructor(private http:Http, private authenticationService:AuthenticationService) {
    this.factory = new Factory();
  }

  public get(ownerName:string, repoName:string) {
    const url = `${this.apiUrl}/repos/${ownerName}/${repoName}/${this.type}`;
    return this.http.get(url, {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public create(ownerName:string, repoName:string, obj:Label) {
    const url = `${this.apiUrl}/repos/${ownerName}/${repoName}/${this.type}`;
    return this.http.post(url, obj.toJson(), {
      headers: this.authenticationService.getAuthedHeader()
    })
      .map(res => this.factory.translate('labels', res.json()));
  }
}
