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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private _UserAuthService: UserAuthService) {}

  isUserLogged?:boolean;
  private authSubscription!:Subscription;
  ngOnInit(): void {

    // this.isUserLogged=this._UserAuthService.isUserLogged;
    this.authSubscription=this._UserAuthService.isLoggedIn$.subscribe({
      next:(status)=>{this.isUserLogged=status}
    })
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
