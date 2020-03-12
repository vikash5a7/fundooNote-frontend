import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isLoading = false;
  public error = null;
  public form = {
    email: null,
  };

  constructor(
    private user: UserService,
    private route: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.isLoading = true;
    this.user.forgetPassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error));
  }
  handleError(error: { error: any; }) {
    this.isLoading = false;
    this.error = error.error.message;
    console.log(error);
    this.matSnackBar.open(this.error, 'ok', {
      duration: 5000
    });
  }
  handleResponse(data) {
    this.isLoading = false;
    this.matSnackBar.open('Check Your Email Please ', 'ok', {
      duration: 5000
    });
    this.route.navigateByUrl('\login');
  }
}
