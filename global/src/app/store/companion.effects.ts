import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { assignQuest } from '../store/companion.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CompanionEffects {
  private actions$ = inject(Actions);

  assignQuestLog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(assignQuest),
        tap((action) => {
          console.log(
            '[Effect] Assigned quest:',
            action.quest,
            'to companion with ID:',
            action.id
          );
        })
      ),
    { dispatch: false }
  );
}
