import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularAttackAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularAttackAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://torrid-torch-5069.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Popup,
    scope: ['user', 'repo']
  })
]);
