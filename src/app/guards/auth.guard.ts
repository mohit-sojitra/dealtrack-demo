import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, CanLoad } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(): boolean | UrlTree {
    this.authService.autoLogin();
    if (this.authService.isLoggedIn()) {
      return this.router.createUrlTree(['/login']);
    }
    return true;
  }
}
