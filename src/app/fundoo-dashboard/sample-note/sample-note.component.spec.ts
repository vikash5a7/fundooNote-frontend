import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNoteComponent } from './sample-note.component';

describe('SampleNoteComponent', () => {
  let component: SampleNoteComponent;
  let fixture: ComponentFixture<SampleNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
