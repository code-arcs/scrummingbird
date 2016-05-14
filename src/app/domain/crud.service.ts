import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Factory from './factory';

@Injectable()
export default class CrudService {
  owner: String;
  private apiUrl: String = "https://api.github.com";
  private factory: Factory;
  private http: Http;

  constructor(private type:string) {}

  public get( repoName:string){
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}`;
    return this.http.get(url)
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public getOne( repoName:string, number:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.get(url)
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public create( repoName:string, obj:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}`;
    return this.http.post(url, obj.toJson())
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public update( repoName:string, number:any, obj:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.patch(url,  obj.toJson())
      .map(res => this.factory.translate(this.type, res.json()));
  }

  public delete( repoName:string, number:any){
    const url = `${this.apiUrl}/repos/${this.owner}/${repoName}/${this.type}/${number}`;
    return this.http.delete(url)
      .map(res => this.factory.translate(this.type, res.json()));
  }

}
