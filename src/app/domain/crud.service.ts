import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Factory from './factory';

@Injectable()
export class CrudService {

  repoName: String;
  owner: String;
  private apiUrl: String = "https://api.github.com";
  private factory: Factory;
  private http: Http;

  constructor() {}

  public get(type: String){
    const url = `${this.apiUrl}/repos/${this.owner}/${this.repoName}/${type}`;
    return this.http.get(url)
      .map(res => this.factory.translate(type, res.json()));
  }

  public getOne(type:string, number:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${this.repoName}/${type}/${number}`;
    return this.http.get(url)
      .map(res => this.factory.translate(type, res.json()));
  }

  public create(type:string, obj:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${this.repoName}/${type}`;
    return this.http.post(url, obj.toJson())
      .map(res => this.factory.translate(type, res.json()));
  }

  public update(type:string, number:any, obj:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${this.repoName}/${type}/${number}`;
    return this.http.patch(url,  obj.toJson())
      .map(res => this.factory.translate(type, res.json()));
  }

  public delete(type:string, number:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${this.repoName}/${type}/${number}`;
    return this.http.delete(url)
      .map(res => this.factory.translate(type, res.json()));
  }

}
