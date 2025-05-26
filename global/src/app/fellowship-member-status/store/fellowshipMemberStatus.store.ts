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
}
