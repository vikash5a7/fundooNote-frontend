import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
      RouterTestingModule
    ],
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
