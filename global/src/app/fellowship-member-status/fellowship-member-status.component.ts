import { Component, inject } from '@angular/core';
import { StatusCardComponent } from './status-card/status-card.component';
import { FellowshipMemberStatus } from './models/fellowshipMemberStatus.model';
import { Store } from '@ngrx/store';
import { selectCompanions } from '../companion/store/companion.selectors';
import { tap } from 'rxjs';
import { Companion } from '../companion/models/companion.model';

@Component({
  selector: 'app-fellowship-member-status',
  imports: [StatusCardComponent],
  templateUrl: './fellowship-member-status.component.html',
  styleUrl: './fellowship-member-status.component.scss',
})
export class FellowshipMemberStatusComponent {
  private companionGlobalStore: Store = inject(Store);
  members: FellowshipMemberStatus[] = [];

  constructor() {
    this.companionGlobalStore
      .select(selectCompanions)
      .pipe(
        tap(
          (companionList: Companion[]) =>
            (this.members = companionList.map((element) => ({
              companion: element,
              status: 'alive',
            })))
        )
      )
      .subscribe();
  }
}
