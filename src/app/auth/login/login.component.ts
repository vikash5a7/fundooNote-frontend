import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error = null;
  public form = {
    email: null,
    password: null
  };

  constructor(private user: UserService,
              private token: TokenService
    ) {
  }
  handleError(error: { error: any; }) {
  this.error = error.error;
  console.log(error);
  }
  ngOnInit() {
  }
  onSubmit() {
    this.user.signIn(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }
  handleResponse(data) {
    console.log(data.token);
    this.token.handle(data.token);
  }
}
