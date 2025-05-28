import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  InMemoryScrollingOptions
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const routerConfig: InMemoryScrollingOptions = {

  scrollPositionRestoration: 'enabled'
};
export const appConfig: ApplicationConfig = {
  providers:
  [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
       withInMemoryScrolling(routerConfig)
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay())
  ]
};
