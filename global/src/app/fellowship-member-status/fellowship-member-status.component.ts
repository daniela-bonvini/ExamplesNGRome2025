import { Component } from '@angular/core';
import { StatusCardComponent } from './status-card/status-card.component';
import { FellowshipMemberStatus } from './models/fellowshipMemberStatus.model';

@Component({
  selector: 'app-fellowship-member-status',
  imports: [StatusCardComponent],
  templateUrl: './fellowship-member-status.component.html',
  styleUrl: './fellowship-member-status.component.scss',
})
export class FellowshipMemberStatusComponent {
  member1: FellowshipMemberStatus = {
    name: 'Frodo Baggins',
    status: 'unknown',
  };
  member2: FellowshipMemberStatus = {
    name: 'Boromir',
    status: 'alive',
  };
  member3: FellowshipMemberStatus = {
    name: 'Gandalf the Grey',
    status: 'alive',
  };
}
