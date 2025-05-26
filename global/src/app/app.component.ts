import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Companion } from './models/companion.model';
import { Store } from '@ngrx/store';
import { selectCompanions } from './store/companion.selectors';
import { assignQuest } from './store/companion.actions';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SelectModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store: Store = inject(Store);
  companions$: Observable<Companion[]>;
  selectedCompanionId: number | null = null;
  questInput: string = "";

  constructor() {
    this.companions$ = this.store.select(selectCompanions);
    this.companions$.subscribe((res) => console.log(res))
  }

  ngOnInit() {
  }

  onAssignQuest() {
    if (this.selectedCompanionId && this.questInput) {
      this.store.dispatch(
        assignQuest({
          id: this.selectedCompanionId,
          quest: this.questInput,
        })
      );
      this.questInput = "";
    }
  }
}
