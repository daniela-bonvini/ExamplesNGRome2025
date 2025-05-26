import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { assignQuest } from '../store/companion.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanionEffects {
  private actions$ = inject(Actions);
  constructor() {}

  assignQuestSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(assignQuest),
      map(() => ({ type: '[Companion] Assign Quest Success' }))
    )
  );
}
