import { ApplicationConfig } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { CompanionEffects } from './store/companion.effects';

export const effectsConfig: ApplicationConfig = {
  providers: [provideEffects([CompanionEffects])]
};
