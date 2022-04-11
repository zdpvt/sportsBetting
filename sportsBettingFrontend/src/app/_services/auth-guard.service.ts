import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService,  private router: Router) {
    // Don't have to initialize AuthService because value is injected!!
    // Dependency and Injection is essential to keep track of the same data.
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.auth.currentUserValue;

    if (currentUser) {

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
