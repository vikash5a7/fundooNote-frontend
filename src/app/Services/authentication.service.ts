import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn);

constructor(private token: TokenService ) { }

}
