import { createAction, props } from '@ngrx/store';

export const assignQuest = createAction(
  '[Companion] Assign Quest',
  props<{ id: number; quest: string }>()
);

export const loadQuestList = createAction(
  '[Companion] Load Quest List',
);

export const loadQuestListSuccess = createAction(
  '[Companion] Load Quest List Success',
  props<{ questList: { id: number; description: string }[] }>()
);
