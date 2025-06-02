import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Companion } from './models/companion.model';
import { assignQuest } from './store/companion.actions';
import { selectCompanions, selectQuestList } from './store/companion.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Quest } from './models/quest.model';

@Component({
  selector: 'app-companion',
  imports: [CommonModule, FormsModule],
  templateUrl: './companion.component.html',
  styleUrl: './companion.component.scss',
})
export class CompanionComponent {
  private store: Store = inject(Store);
  companions$: Observable<Companion[]>;
  questList$: Observable<Quest[]>;
  selectedCompanionId: number | null = null;
  selectedQuest: string | null = null;

  constructor() {
    this.companions$ = this.store.select(selectCompanions);
    this.questList$ = this.store.select(selectQuestList);
  }

  onAssignQuest() {
    const id =
      this.selectedCompanionId !== null
        ? Number(this.selectedCompanionId)
        : null;

    if (id && this.selectedQuest) {
      console.log('Selected quest:', this.selectedQuest);
      this.store.dispatch(
        assignQuest({
          id,
          quest: this.selectedQuest,
        })
      );
      this.selectedCompanionId = null;
      this.selectedQuest = null;
    }
  }
}
