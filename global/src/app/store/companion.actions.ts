import { createAction, props } from '@ngrx/store';
import { Companion } from '../models/companion.model';

export const recruitCompanion = createAction(
  '[Companion] Recruit Companion',
  props<{ companion: Companion }>()
);
export const assignQuest = createAction(
  '[Companion] Assign Quest',
  props<{ id: number; quest: string }>()
);
