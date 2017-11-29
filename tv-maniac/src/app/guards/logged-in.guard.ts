import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
      const isLoggedIn = prompt('Are you logged in (y/n)?') === 'y';
      return isLoggedIn;
  }
}
