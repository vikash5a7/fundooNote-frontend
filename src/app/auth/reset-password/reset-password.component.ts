import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public form = {
    email: null,
    password: null,
    confirmPassword: null,
    };
    public error = null;
    public isloading = false;

  constructor() { }

  ngOnInit() {
  }

}
