import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FellowshipMemberStatus } from '../models/fellowshipMemberStatus.model';

export interface FellowshipMemberState {
  memberStatus: FellowshipMemberStatus;
}

@Injectable()
export class FellowshipMemberStatusStore extends ComponentStore<FellowshipMemberState> {
  constructor() {
    super({ memberStatus: { name: '', status: 'alive' } });
  }

  readonly changeStatus = this.updater((state) => ({
    memberStatus: {
      ...state.memberStatus,
      status: state.memberStatus.status === 'alive' ? 'unknown' : 'dead',
    },
  }));
}
