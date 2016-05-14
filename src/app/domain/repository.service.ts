import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Factory from './factory';
import Repository from './repository';

@Injectable()
export class RepositoryService {
  private factory: Factory

  constructor(private http: Http) {
    this.factory = new Factory();
  }

  public getRepositories(){
      return this.http.get('https://api.github.com/users/sprengerjo/repos')
      .map(res => this.factory.translate(Repository.toString(), res.json()));
  }

  public getRepository(id:number){

  }

}
