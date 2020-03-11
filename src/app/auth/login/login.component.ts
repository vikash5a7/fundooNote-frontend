import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error = null;
  public hide = true;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  public form = {
    email: null,
    password: null
  };

  constructor(private user: UserService,
              private token: TokenService,
              private route: Router,
    ) {
  }
  handleError(error: { error: any; }) {
    this.isLoading = true;
    this.error = error.error.message;
    console.log(error);
  }
  ngOnInit() {
  }
  onSubmit() {
    this.isLoading = true;
    this.user.signIn(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }
  handleResponse(data) {
    this.token.handle(data.token);
    this.isLoading = false;
    this.token.logedIn(true);
    this.route.navigateByUrl('/fundoo');
  }
  isValideUser() {
  this.tokenValue = this.token.get();
  this.user.verifyUserByToken(this.tokenValue).subscribe(
    data => this.hadlseUserVeriFyResponse(data),
    error => this.handldeUserverfyError(error)
    );
  }
  hadlseUserVeriFyResponse(data) {
    if (data.statusCode === 200) {
      this.token.valideUser = true;
    }
  }
  handldeUserverfyError(error) {
    this.error = error.error.message;
    console.log(error);
  }

}
