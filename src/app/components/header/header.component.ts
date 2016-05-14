import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
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
export class HeaderComponent {
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
}
