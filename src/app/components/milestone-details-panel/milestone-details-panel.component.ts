import { Component, Input} from '@angular/core';
import Milestone from '../../domain/milestone'

@Component({
  moduleId: module.id,
  selector: 'app-milestone-details-panel',
  templateUrl: 'milestone-details-panel.component.html',
  styleUrls: ['milestone-details-panel.component.css']
})
export class MilestoneDetailsPanelComponent {

  @Input() milestone:Milestone;

  constructor() {}
}
