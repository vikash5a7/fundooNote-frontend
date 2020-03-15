import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn);
tokenValue = null;
error = null;
constructor(private token: TokenService,
            private user: UserService,
            private route: Router ) { }

isValideUser() {
  this.tokenValue = this.token.get();
  this.user.verifyUserByToken(this.tokenValue).subscribe(
    data => this.hadlseUserVeriFyResponse(data),
    error => this.handldeUserverfyError(error)
    );
  }
  hadlseUserVeriFyResponse(data) {
    if (data.statusCode === 200) {
      this.token.loggedIn = true;
    }
  }
  handldeUserverfyError(error) {
    this.error = error.error.message;
    this.token.loggedIn = false;
    this.route.navigateByUrl('\login');
  }
}
