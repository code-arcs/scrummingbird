import { Component } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service'

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  providers: [AuthenticationService],
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  constructor(private authenticationService:AuthenticationService) {
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
