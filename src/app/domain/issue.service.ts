import { Injectable } from '@angular/core';
import CrudService from './crud.service';


@Injectable()
export class IssueService extends CrudService{

  constructor() {
    super();
  }

  public get(repoName:string){
   return super.get('issue', repoName);
  }

  public getOne(repoName:string, number:any){
    return super.getOne('issue', repoName, number);
  }

  public create(repoName:string, obj:any){
    return super.create('issue', repoName, obj);
  }

  public update(repoName:string, number:any, obj:any){
    return super.update('issue', repoName, number, obj);
  }

  public delete(repoName:string, number:any){
    return super.delete('issue', repoName, number);
  }

}
