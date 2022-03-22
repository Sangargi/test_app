import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot) {
    let email = localStorage.getItem('email');
    if (typeof email === 'string') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
