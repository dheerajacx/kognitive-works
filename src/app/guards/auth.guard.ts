import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(
  ): boolean {
    if (localStorage.getItem('kworks_auth')==='true') {
      // console.log('AuthGuard: User is authenticated');
      return true;
    } else {
      // console.log('AuthGuard: User is not authenticated, redirecting to login');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
