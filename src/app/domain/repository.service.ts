import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Repository } from './repository';

@Injectable()
export class RepositoryService {

  constructor(private http: Http) {

  }

  public getRepositories(){
      return this.http.get('https://api.github.com/users/sprengerjo/repos');
  }

  public getRepository(id:number){

  }

}
