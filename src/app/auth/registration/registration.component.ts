import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public error = null;
  public isloading = false;
  public form = {
  fname: null,
  lname: null,
  email: null,
  password: null,
  confirmPassword: null,
  mobileNumber: null,
  };

  constructor(private user: UserService,
              private route: Router,
              private matSnakeBar: MatSnackBar
    ) {
  }
  ngOnInit() {
  }
  handleError(error) {
  this.isloading = false;
  this.error = error.error.message;
  console.log(error);
  this.matSnakeBar.open(this.error, 'ok', {
    duration: 5000
  });
  }
  onSubmit() {
    this.isloading = true;
    this.user.signUp(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }
  handleResponse(data) {
    this.isloading = false;
    this.matSnakeBar.open('Sucessfull Registration Done ', 'ok', {
      duration: 5000
    });
    this.route.navigateByUrl('\login');
  }
}
