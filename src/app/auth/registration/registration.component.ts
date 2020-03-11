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
  this.error = error.error.message;
  console.log(error);
  }
  onSubmit() {
    this.user.signUp(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }
  handleResponse(data) {
  this.route.navigateByUrl('\login');
  }

}
