import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service'
import { RepositoryComponent } from './components/repository/repository.component'

@Component({
  moduleId: module.id,
  selector: 'angular-attack-app',
  templateUrl: 'angular-attack.component.html',
  providers: [AuthenticationService],
  styleUrls: ['angular-attack.component.css'],
  directives: [RepositoryComponent]
})
export class AngularAttackAppComponent {
  title = 'angular-attack works!';
  user: any;
  constructor(private authenticationService:AuthenticationService) {
    this.authenticationService
      .getAuth()
      .subscribe((auth) => this.user = auth);
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
