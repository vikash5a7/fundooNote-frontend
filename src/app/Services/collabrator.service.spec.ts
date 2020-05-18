import { TestBed } from '@angular/core/testing';

import { CollabratorService } from './collabrator.service';
import {HttpClientModule} from '@angular/common/http';

describe('CollabratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: CollabratorService = TestBed.get(CollabratorService);
    expect(service).toBeTruthy();
  });
});
