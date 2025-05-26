import { computed, Injectable } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

type RingSearchState = {
  lastSearchedPlace: string;
  searchTerm: string;
  listOfPlaces: string[];
};

const initialState: RingSearchState = {
  lastSearchedPlace: 'Anduin river',
  searchTerm: '',
  listOfPlaces: [],
};

export const RingSearchStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    filteredPlaces: computed(() => {
      return store
        .listOfPlaces()
        .filter((place) =>
          place.toLowerCase().includes(store.searchTerm().toLowerCase())
        );
    }),
  })),
  withMethods((store) => ({
    setLastSearchedPlace(place: string) {
      patchState(store, (state) => ({ ...state, lastSearchedPlace: place }));
    },
    updateSearchTerm(term: string) {
      patchState(store, (state) => ({ ...state, searchTerm: term }));
    },
  })),
  withHooks({
    onInit(store) {
      // Simulate fetching all possible places
      const allPlaces = [
        'Anduin river',
        'Mount Doom',
        'Shire',
        'Mordor',
        'Rivendell',
        'Gondor',
        'Isengard',
        'Lothlórien',
        'Helm’s Deep',
        'Fangorn Forest',
      ];
      patchState(store, (state) => ({ ...state, listOfPlaces: allPlaces }));
    },
  })
);
