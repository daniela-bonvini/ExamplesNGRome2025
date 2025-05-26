import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Companion } from './models/companion.model';
import { Store } from '@ngrx/store';
import { selectCompanions } from './store/companion.selectors';
import { assignQuest } from './store/companion.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
