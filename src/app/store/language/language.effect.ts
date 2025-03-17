import { Actions, createEffect, ofType } from '@ngrx/effects';
import { langAction } from './language.action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LangEffect {
  constructor(private actions$: Actions) {
    console.log('Actions service:', this.actions$); // Check if this logs correctly
  }

  changeLang$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(langAction),
        tap((action) => {
          console.log('Language changed to:', action.lang);
        })
      ),
    { dispatch: false }
  );
}
