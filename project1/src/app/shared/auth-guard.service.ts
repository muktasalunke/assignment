import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('UserName') && localStorage.getItem('password')) {
          // logged in so return true
          // this.router.navigate(['/dashboard']);
          return true;
      }

      // not logged in so redirect to login page with the return url
     this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}