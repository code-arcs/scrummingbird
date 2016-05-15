import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {AngularFire, FirebaseAuth, AuthProviders} from 'angularfire2';
import Factory from '../domain/factory'
import User from './../domain/user'

@Injectable()
export class AuthenticationService {
    private factory:Factory = new Factory();
    private user:User;

    constructor(private fireBaseAuth:FirebaseAuth) {
        this.fireBaseAuth
            .subscribe((_auth) => {
                if (_auth) {
                    return this.user = this.factory.translate('User', _auth);
                }
                return null;
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
                if (ghUser) {
                    return this.factory.translate('User', ghUser);
                }
            })
    }

    public getAuthedUser() {
        return this.user;
    }

    public getAuthedHeader():Headers {
        const authedHeader = new Headers();
        authedHeader.append('Authorization', `token ${this.user.accessToken}`);
        authedHeader.append('If-Modified-Since', /*FIXME: <crap but it works for now...>*/new Date(2000,5,5).toString());
        return authedHeader;
    }
}
