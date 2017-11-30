import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const isLoggedIn = route.data.roles.includes(prompt('Which role do you have?'));
    // if (!isLoggedIn) {
    //   this.router.navigateByUrl('/');
    // }
    return true; //isLoggedIn;
  }
}
