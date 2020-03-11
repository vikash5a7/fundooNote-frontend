import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

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
              private route: Router
    ) {
  }
  ngOnInit() {
  }
  handleError(error) {
  this.isloading = false;
  this.error = error.error.message;
  console.log(error);
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
    this.route.navigateByUrl('\login');
  }
}
