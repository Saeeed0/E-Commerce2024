import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let userAuthService = inject(UserAuthService);
  if (userAuthService.isUserLogged) return true;
  
  let router=inject(Router);
  router.navigateByUrl('/login');
  return false;
};
