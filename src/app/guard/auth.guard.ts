import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.checkLogin();
  }

  isLoggedIn(): boolean {
    let isLoggedIn = true;
    const token = localStorage.getItem('token');
    if (!token) {
      isLoggedIn = false;
    }
    return isLoggedIn;
  }

  checkLogin():boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
