import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _UserAuthService: UserAuthService) {}
  isUserLogged!: boolean;
  authSubscription: Subscription | null = null; // ✅ Safer initialization
  // ngOnInit(): void {
  //   this.isUserLogged = this._UserAuthService.isUserLogged;
  // }
  // login() {
  //   this._UserAuthService.login();
  //   this.isUserLogged = this._UserAuthService.isUserLogged;
  // }
  // logout() {
  //   this._UserAuthService.logout();
  //   this.isUserLogged = this._UserAuthService.isUserLogged;
  // }
  ngOnInit(): void {
    this.authSubscription = this._UserAuthService.isLoggedIn$.subscribe({
      next: (status) => {
        this.isUserLogged = status;
      },
    });
  }
  login() {
    this._UserAuthService.login();
  }
  logout() {
    this._UserAuthService.logout();
  }
  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
