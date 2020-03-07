import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundooDashboardComponent } from './fundoo-dashboard.component';

describe('FundooDashboardComponent', () => {
  let component: FundooDashboardComponent;
  let fixture: ComponentFixture<FundooDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundooDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundooDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
