import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FundooDashboardComponent } from './fundoo-dashboard/fundoo-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { SpinnerComponent } from './util/spinner/spinner.component';
import { LogoComponent } from './util/logo/logo.component';
import { MatMenuModule, MatChipList, MatCheckbox, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './fundoo-dashboard/navbarandsidebar/navbar.component';
import { MatAutocompleteModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { CreateNoteComponent } from './fundoo-dashboard/create-note/create-note.component';
import { IconsComponent } from './fundoo-dashboard/icons/icons.component';
import { MatTooltipModule } from '@angular/material';
import { DisplayNoteComponent } from './fundoo-dashboard/display-note/display-note.component';
import { IconlistComponent } from './fundoo-dashboard/iconlist/iconlist.component';
import { PinnedNoteDisplayComponent } from './fundoo-dashboard/pinned-note-display/pinned-note-display.component';
import { NoteComponent } from './fundoo-dashboard/note/note.component';
import { TrashComponent } from './fundoo-dashboard/trash/trash.component';
import { ArchiveComponent } from './fundoo-dashboard/archive/archive.component';
import { RemindersComponent } from './fundoo-dashboard/reminders/reminders.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNoteComponent } from './fundoo-dashboard/update-note/update-note.component';
import { EditLabelComponent } from './fundoo-dashboard/label/edit-label/edit-label.component';
import { CollabratorComponent } from './fundoo-dashboard/collabrator/collabrator.component';
import { SearchLabelPipe } from './pipe/search-label.pipe';
import { LabelNotesComponent } from './fundoo-dashboard/label-notes/label-notes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PagenotfoundComponent,
    FundooDashboardComponent,
    UpdatePasswordComponent,
    SpinnerComponent,
    LogoComponent,
    NavbarComponent,
    CreateNoteComponent,
    IconsComponent,
    DisplayNoteComponent,
    IconlistComponent,
    PinnedNoteDisplayComponent,
    NoteComponent,
    TrashComponent,
    ArchiveComponent,
    RemindersComponent,
    UpdateNoteComponent,
    EditLabelComponent,
    CollabratorComponent,
    SearchLabelPipe,
    LabelNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatChipsModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UpdateNoteComponent,EditLabelComponent, CollabratorComponent
  ]
})
export class AppModule { }
