import { Component, inject, input } from '@angular/core';
import { FellowshipMemberStatus } from '../models/fellowshipMemberStatus.model';
import { FellowshipMemberStatusStore } from '../store/fellowshipMemberStatus.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-status-card',
  imports: [],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss',
  providers: [FellowshipMemberStatusStore],
})
export class StatusCardComponent {
  private componentStore = inject(FellowshipMemberStatusStore);
  member = input.required<FellowshipMemberStatus>({});

  updatedMember = toSignal(
    this.componentStore.select((state) => state.memberStatus)
  );

  ngOnInit() {
    this.componentStore.setState({
      memberStatus: { name: this.member().name, status: this.member().status },
    });
  }

  changeMemberStatus() {
    if (this.updatedMember()) {
      this.componentStore.setState((state) => {
        return {
          ...state,
          memberStatus: {
            ...state.memberStatus,
            status: state.memberStatus.status === 'alive' ? 'unknown' : 'dead',
          },
        };
      });
    }
  }
}
