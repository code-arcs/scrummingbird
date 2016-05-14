import {Injectable} from '@angular/core';
//import {Headers} from 'angular/http';
import {AngularFire, FirebaseAuth, AuthProviders} from 'angularfire2';
import {Factory} from '../domain/factory'


@Injectable()
export class AuthenticationService {
  factory:Factory = new Factory();
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
          return this.factory.translate('User', ghUser);
        }
      })
  }
}
