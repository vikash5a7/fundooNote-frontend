import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor( private http: HttpClient) {
  }

  ngOnInit() {
  }
  handleError(error) {
  this.error = error.error.message;
  console.log(error);
  }
  onSubmit() {
   return this.http.post('http://localhost:8080/user/registration', this.form).subscribe(
     data => console.log(data),
     error => this.handleError(error)
   );
  }

}
