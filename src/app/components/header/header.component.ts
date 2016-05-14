import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteSegment, OnActivate, RouteTree} from '@angular/router';
import {AuthenticationService} from './../../shared/authentication.service'
import User from './../../domain/user'

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  providers: [AuthenticationService],
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnActivate {
  public user:User;

  constructor(private authenticationService:AuthenticationService) {
    authenticationService.getUser()
      .subscribe(user => this.user = user);
  }

  public login() {
    this.authenticationService
      .login();
  }

  public logout() {
    this.authenticationService
      .logout();
  }

  routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
    console.log(curr, prev, currTree, prevTree)
  }
}
