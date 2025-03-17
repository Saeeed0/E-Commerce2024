// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { UserAuthService } from '../../services/user-auth.service';

// @Component({
//   selector: 'app-navbar',
//   imports: [RouterLink, RouterLinkActive],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css',
// })
// export class NavbarComponent {
//   constructor(private _UserAuthService: UserAuthService) {}

//   get isUserLogged(): boolean {
//     return this._UserAuthService.isUserLogged;
//   }
// }

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { langAction } from '../../store/language/language.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  counter$!: Observable<number>;
  language$!: Observable<string>;
  currentLang!: string;
  constructor(
    private _UserAuthService: UserAuthService,
    private store: Store<{ myCounter: number; language: string }>
  ) {
    this.counter$ = store.select('myCounter');
    this.language$ = store.select('language');
    this.language$.subscribe((langVal) => {
      this.currentLang = langVal;
    });
  }
  changeLang() {
    this.store.dispatch(
      langAction({ lang: this.currentLang === 'en' ? 'ar' : 'en' })
    );
  }
  isUserLogged?: boolean;
  private authSubscription!: Subscription;
  ngOnInit(): void {
    // this.isUserLogged=this._UserAuthService.isUserLogged;
    this.authSubscription = this._UserAuthService.isLoggedIn$.subscribe({
      next: (status) => {
        this.isUserLogged = status;
      },
    });
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
