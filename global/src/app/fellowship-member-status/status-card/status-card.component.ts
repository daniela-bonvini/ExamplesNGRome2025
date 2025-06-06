import { Component, computed, inject, input } from '@angular/core';
import { FellowshipMemberStatus } from '../models/fellowshipMemberStatus.model';
import { FellowshipMemberStatusStore } from '../store/fellowshipMemberStatus.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-card',
  imports: [CommonModule],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss',
  providers: [FellowshipMemberStatusStore],
})
export class StatusCardComponent {
  private componentStore = inject(FellowshipMemberStatusStore);
  member = input.required<FellowshipMemberStatus>({});

  memberStatus = toSignal(this.componentStore.memberStatus$);

  src = computed(() => {
    const srcName =
      this.memberStatus()?.status === 'dead'
        ? 'skull-crossbones-solid'
        : this.memberStatus()?.status === 'unknown'
        ? 'question-solid'
        : 'face-smile-solid';
    return `assets/icons/${srcName}.svg`;
  });

  ngOnInit() {
    this.componentStore.setState({
      memberStatus: {
        companion: this.member().companion,
        status: this.member().status,
      },
    });
  }

  changeMemberStatus() {
    if (this.memberStatus()) {
      this.componentStore.changeStatus();
    }
  }
}
