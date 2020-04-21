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
import { NoteComponent } from './fundoo-dashboard/note/note.component';
import { TrashComponent } from './fundoo-dashboard/trash/trash.component';
import { ArchiveComponent } from './fundoo-dashboard/archive/archive.component';
import { RemindersComponent } from './fundoo-dashboard/reminders/reminders.component';
import { UpdateNoteComponent } from './fundoo-dashboard/update-note/update-note.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },

  {path: 'registration', component: RegistrationComponent, canActivate: [BeforeLoginService]},
  {
    path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'forget-password', component: ForgotPasswordComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'reset-password/:token', component: ResetPasswordComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'dashboard', component: FundooDashboardComponent, canActivate: [AfterLoginService],
    children : [
      {
      path: "", redirectTo: "/dashboard/notes", pathMatch: "full"
      },
      {
        path: 'notes', component: NoteComponent, canActivate: [AfterLoginService]
      },
      {
        path: 'trash', component: TrashComponent, canActivate: [AfterLoginService]
      }, {
        path: 'archive', component: ArchiveComponent, canActivate: [AfterLoginService]
      }, {
        path: 'remider', component: RemindersComponent , canActivate: [AfterLoginService]
      },
    ]
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
