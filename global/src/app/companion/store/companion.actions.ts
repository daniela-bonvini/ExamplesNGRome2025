import { createAction, props } from '@ngrx/store';

export const assignQuest = createAction(
  '[Companion] Assign Quest',
  props<{ id: number; quest: string }>()
);
