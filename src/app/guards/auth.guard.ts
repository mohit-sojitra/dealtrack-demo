import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    this.authService.autoLogin();
    if (!this.authService.user.value) {
      return this.router.createUrlTree(['/auth']);
    }
    return true;
  }
}
