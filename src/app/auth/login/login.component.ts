import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from '../../Services/token.service';
import { MatSnackBar } from '@angular/material';
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
              private matSnackBar: MatSnackBar
    ) {
  }
  handleError(error: { error: any; }) {
    this.isLoading = false;
    this.error = error.error.message;
    if ( error.error.status === 0) {
      console.log('please connect database');
    }
    this.matSnackBar.open(this.error, 'ok', {
      duration: 5000
    });
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
    this.matSnackBar.open('Sucessfully Login', 'ok', {
      duration: 5000
    });
    this.route.navigateByUrl('/fundoo');
  }
}
