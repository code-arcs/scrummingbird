import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HomeComponent} from './components/home'
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer'
import {RepositoryComponent} from './components/repository/repository.component'
import {RepositoryDetailsComponent} from './components/repository-details/repository-details.component'
import {DisclaimerComponent} from "./components/disclaimer/disclaimer.component";
import {MilestoneCreateComponent} from "./components/milestone-create/milestone-create.component";
import {MyTasksComponent} from "./components/my-tasks/my-tasks.component";

@Component({
  moduleId: module.id,
  selector: 'angular-attack-app',
  templateUrl: 'angular-attack.component.html',
  styleUrls: ['angular-attack.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/mytasks', component: MyTasksComponent},
  {path: '/milestones/:ownerName/:repoName/add', component: MilestoneCreateComponent},
  {path: '/repositories/:ownerName/:repoName', component: RepositoryDetailsComponent},
  {path: '/repositories', component: RepositoryComponent},
  {path: '/disclaimer', component: DisclaimerComponent}
])

export class AngularAttackAppComponent {

}
