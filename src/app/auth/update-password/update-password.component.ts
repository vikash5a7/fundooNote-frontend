import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  public error = null;
  public isLoading = false;
  token: string;
  public form = {
    email: null,
    newPassword: null,
    confirmPassword: null,
  };
  constructor(private user: UserService,
              private route: Router,
              private matSnakeBar: MatSnackBar,
              private activatedRoute: ActivatedRoute
) {
}
ngOnInit() {
  this.activatedRoute.paramMap.subscribe((parameters: ParamMap) => {
  this.token = parameters.get('token');
  console.log(this.token);
  });
  }
handleError(error) {
  this.isLoading = false;
  this.error = error.error.message;
  console.log(error);
  this.matSnakeBar.open(this.error, 'ok', {
  duration: 5000
});
}
onSubmit() {
  this.isLoading = true;
  this.user.updatePassword(this.form, this.token).subscribe(
  data => this.handleResponse(data),
  error => this.handleError(error)
);
}
handleResponse(data) {
  this.isLoading = false;
  this.matSnakeBar.open('Sucessfull Update Password ', 'ok', {
  duration: 5000
  });
  this.route.navigateByUrl('\login');
}

}
