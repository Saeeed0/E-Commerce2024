import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}
  // isLoggedInSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  login() {
    localStorage.setItem('token', 'fal3jr39i0iw3i2r3iohfn');
    this.isLoggedInSubject.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
  private checkLoginStatus(): boolean {
    return !!localStorage.getItem('token');
  }
  get isUserLogged(): boolean {
    // return localStorage.getItem('token') ? true : false;
    return !!localStorage.getItem('token');
  }
}
