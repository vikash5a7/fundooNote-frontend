import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  constructor( private http: HttpClient) {

   }
   public error = null;

  handleError(error) {
  this.error = error.error;
  console.log(error);
  }
  ngOnInit() {
  }

  onSubmit() {
   return this.http.post('http://localhost:8080/user/login', this.form).subscribe(
     data => console.log(data),
     error => this.handleError(error)
   );
  }

}
