import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UrlTree } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   UrlTree| Observable<boolean |UrlTree> | Promise<boolean | UrlTree> {
    return this.token.loggedStatus();
  }

  constructor( private token: TokenService) { }
}
