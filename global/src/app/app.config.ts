import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { companionReducer } from './companion/reducers/companion.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { effectsConfig } from './companion/effects.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideStore({ companion: companionReducer }),
    ...effectsConfig.providers,
  ],
};
