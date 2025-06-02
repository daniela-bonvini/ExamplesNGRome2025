import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanionState } from '../reducers/companion.reducer';

export const selectCompanionState =
  createFeatureSelector<CompanionState>('companion');

export const selectCompanions = createSelector(
  selectCompanionState,
  (state: CompanionState) => state.companionList,
);

export const selectQuestList = createSelector(
  selectCompanionState,
  (state: CompanionState) => state.questList
);