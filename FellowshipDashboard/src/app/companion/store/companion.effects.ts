import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { loadQuestListSuccess } from './companion.actions';

@Injectable()
export class CompanionEffects {
  private actions$ = inject(Actions);

  loadQuestList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Companion] Load Quest List'),
      switchMap(() => {
        // simulating HTTP request with delay using timer
        return timer(1000).pipe(
          map(() => {
            console.log('[Effect] Quest list loaded');
            return loadQuestListSuccess({ questList: mockQuestList });
          })
        );
      })
    )
  );
}

const mockQuestList = [
  { id: 1, description: 'Destroy the one ring' },
  {
    id: 2,
    description: 'Defend the citadel from the orcs',
  },
  {
    id: 3,
    description: 'Fight the Balrog',
  },
  {
    id: 4,
    description: 'Forge an alliance with Rohan',
  },
  {
    id: 5,
    description: 'Rescue the captured hobbits',
  },
  {
    id: 6,
    description: 'Prepare for the final battle against Sauron',
  },
];
