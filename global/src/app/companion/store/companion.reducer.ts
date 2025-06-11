import { createReducer, on } from '@ngrx/store';
import * as CompanionActions from './companion.actions';
import { Companion } from '../models/companion.model';
import { Quest } from '../models/quest.model';

export interface CompanionState {
  companionList: Companion[];
  questList: Quest[];
}

export const initialState: CompanionState = {
  companionList: [
    { id: 1, quest: '', name: 'Frodo' },
    { id: 2, quest: '', name: 'Sam' },
    { id: 3, quest: '', name: 'Aragorn' },
    { id: 6, quest: '', name: 'Gandalf' },
    { id: 4, quest: '', name: 'Legolas' },
    { id: 5, quest: '', name: 'Gimli' },
    { id: 7, quest: '', name: 'Boromir' },
    { id: 8, quest: '', name: 'Pippin' },
    { id: 9, quest: '', name: 'Merry' },
  ],
  questList: [],
};

export const companionReducer = createReducer(
  initialState,
  on(CompanionActions.assignQuest, (state, { id, quest }) => ({
    ...state,
    companionList: state.companionList.map((companion) =>
      companion.id === id ? { ...companion, quest } : companion
    ),
  })),

  on(CompanionActions.loadQuestListSuccess, (state, { questList }) => ({
    ...state,
    questList,
  }))
);
