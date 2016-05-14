import {Injectable} from '@angular/core';
//import {Headers} from 'angular/http';
import {AngularFire, FirebaseAuth, AuthProviders} from 'angularfire2';
import User from '../domain/user'


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

  public getUser() {
    return this.fireBaseAuth
      .map(ghUser => {
        if(ghUser) {
          let user = new User();
          user.id = ghUser.github.id;
          user.email = ghUser.github.email;
          user.username = ghUser.github.username;
          user.name = ghUser.github.displayName;
          user.profileImage = ghUser.github.profileImageUrl;
          user.accessToken = ghUser.github.accessToken;
          return user;
        }
      })
  }
}
