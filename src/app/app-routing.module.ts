import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FundooDashboardComponent } from './fundoo-dashboard/fundoo-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },

  {
   path: 'registration', component: RegistrationComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'forget-password', component: ForgotPasswordComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'reset-password', component: ResetPasswordComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'fundoo', component: FundooDashboardComponent, canActivate: [AfterLoginService]
  },
  {
    path: 'update-password', component: UpdatePasswordComponent, canActivate: [BeforeLoginService]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
