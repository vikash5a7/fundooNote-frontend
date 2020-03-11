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
  this.error = error.error.message;
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
    this.token.handle(data.token);
    this.route.navigateByUrl('/fundoo');
  }
}
