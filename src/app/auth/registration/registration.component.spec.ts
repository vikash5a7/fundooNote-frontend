import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { SpinnerComponent } from 'src/app/util/spinner/spinner.component';
import { LogoComponent } from 'src/app/util/logo/logo.component';
import { LayoutModule } from '@angular/cdk/layout';
import {  MatIconModule, MatListModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent, SpinnerComponent, LogoComponent ],
      imports: [
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule, MatInputModule,  RouterTestingModule, HttpClientModule, MatSnackBarModule, BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
