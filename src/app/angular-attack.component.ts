import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer'
import {RepositoryComponent} from './components/repository/repository.component'
import {DisclaimerComponent} from "./components/disclaimer/disclaimer.component";

@Component({
  moduleId: module.id,
  selector: 'angular-attack-app',
  templateUrl: 'angular-attack.component.html',
  styleUrls: ['angular-attack.component.css'],
  directives: [ROUTER_DIRECTIVES, RepositoryComponent, HeaderComponent, FooterComponent]
})
@Routes([
  {path: '/repositories', component: RepositoryComponent},
  {path: '/disclaimer', component: DisclaimerComponent},
])

export class AngularAttackAppComponent {
  title = 'angular-attack works!';
  user:any;
}
