import { TestBed } from '@angular/core/testing';

import { CollabratorService } from './collabrator.service';

describe('CollabratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollabratorService = TestBed.get(CollabratorService);
    expect(service).toBeTruthy();
  });
});
