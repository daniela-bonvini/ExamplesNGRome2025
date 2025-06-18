import { Component, computed, inject, Signal } from '@angular/core';
import { RingSearchStore } from './store/ringSearch.store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ring-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './ring-search.component.html',
  styleUrl: './ring-search.component.scss',
  providers: [RingSearchStore],
})
export class RingSearchComponent {
  private ringSearchStore = inject(RingSearchStore);
  filteredPlaces: Signal<string[]> = this.ringSearchStore.filteredPlaces;
  listOfPlaces: Signal<string[]> = this.ringSearchStore.listOfPlaces;
  searchTerm: Signal<string> = this.ringSearchStore.searchTerm;

  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.ringSearchStore.updateSearchTerm(term);
  }
}
