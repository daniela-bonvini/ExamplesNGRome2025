import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { companionReducer } from './companion/store/companion.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { effectsConfig } from './companion/effects.config';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideStore({ companion: companionReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    ...effectsConfig.providers,
  ],
};
