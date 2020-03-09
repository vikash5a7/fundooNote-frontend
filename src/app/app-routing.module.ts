import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FundooDashboardComponent } from './fundoo-dashboard/fundoo-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'registration',
    pathMatch: 'full'
  },

  {
   path: 'registration', component: RegistrationComponent
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
