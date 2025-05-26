import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanionState } from '../reducers';

export const selectCompanionState =
  createFeatureSelector<CompanionState>('companion');

export const selectCompanions = createSelector(
  selectCompanionState,
  (state: CompanionState) => state.list
);
