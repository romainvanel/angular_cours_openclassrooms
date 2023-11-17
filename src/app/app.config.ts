import { LOCALE_ID, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  { provide: LOCALE_ID, useValue: 'fr-FR' }]
};
