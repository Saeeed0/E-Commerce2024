import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { myInterceptor } from './interceptors/auth-interceptor.service';
import { provideStore } from '@ngrx/store';
import { counterReduceer } from './store/counter/counter.reducers';
import { langReducer } from './store/language/language.reducer';
import { provideEffects } from '@ngrx/effects';
import { LangEffect } from './store/language/language.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([myInterceptor])),
    provideStore({
        myCounter: counterReduceer,
        language: langReducer
    }),
    provideEffects([/*LangEffect*/]),
],
};
