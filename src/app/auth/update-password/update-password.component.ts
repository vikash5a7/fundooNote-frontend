import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  public form = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    confirmPassword: null,
    mobileNumber: null,
  };
  constructor() { }

  ngOnInit() {
  }

}
