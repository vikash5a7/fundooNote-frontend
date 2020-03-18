import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedNoteDisplayComponent } from './pinned-note-display.component';

describe('PinnedNoteDisplayComponent', () => {
  let component: PinnedNoteDisplayComponent;
  let fixture: ComponentFixture<PinnedNoteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedNoteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedNoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
