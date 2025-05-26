import { createReducer, on } from '@ngrx/store';
import * as CompanionActions from '../store/companion.actions';
import { Companion } from '../models/companion.model';

export interface CompanionState {
  list: Companion[];
}

export const initialState: CompanionState = {
  list: [
    { id: 1, quest: '', name: 'Frodo' },
    { id: 2, quest: '', name: 'Sam' },
    { id: 3, quest: '', name: 'Aragorn' },
  ],
};

export const companionReducer = createReducer(
  initialState,
  on(CompanionActions.assignQuest, (state, { id, quest }) => ({
    ...state,
    list: state.list.map((companion) =>
      companion.id === id ? { ...companion, quest } : companion
    ),
  }))
);
