import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Companion } from './models/companion.model';
import { assignQuest } from './store/companion.actions';
import { selectCompanions } from './store/companion.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-companion',
  imports: [CommonModule, FormsModule],
  templateUrl: './companion.component.html',
  styleUrl: './companion.component.scss',
})
export class CompanionComponent {
  private store: Store = inject(Store);
  companions$: Observable<Companion[]>;
  selectedCompanionId: number | null = null;
  questInput: string = '';

  constructor() {
    this.companions$ = this.store.select(selectCompanions);
  }

  onAssignQuest() {
    // Forza il tipo number per selectedCompanionId
    const id =
      this.selectedCompanionId !== null
        ? Number(this.selectedCompanionId)
        : null;
    if (id && this.questInput) {
      console.log(id, this.questInput);
      this.store.dispatch(
        assignQuest({
          id,
          quest: this.questInput,
        })
      );
      this.questInput = '';
    }
  }
}
