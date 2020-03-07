import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FundooDashboardComponent } from './fundoo-dashboard/fundoo-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'registration', component: RegistrationComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'forget-password', component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password', component: ResetPasswordComponent,
  },
  {
    path: 'fundoo', component: FundooDashboardComponent,
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
