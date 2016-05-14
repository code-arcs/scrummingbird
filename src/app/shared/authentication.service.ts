import {Injectable} from '@angular/core';
//import {Headers} from 'angular/http';
import {AngularFire, FirebaseAuth, AuthProviders} from 'angularfire2';


@Injectable()
export class AuthenticationService {
  user: any;
  constructor(private fireBaseAuth: FirebaseAuth) {
    this.fireBaseAuth
        .subscribe((_auth) => {
          this.user = _auth;
        });
  }

  public login() {
    return this.fireBaseAuth
          .login({
              provider: AuthProviders.Github
          });
  }

  public logout() {
    return this.fireBaseAuth
          .logout();
  }

  public getAuth() {
    return this.fireBaseAuth;
  }

  public getUser() {
    return this.user;
  }
}
