import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatReportComponent } from './sat-report.component';

describe('SatReportComponent', () => {
  let component: SatReportComponent;
  let fixture: ComponentFixture<SatReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatReportComponent]
    });
    fixture = TestBed.createComponent(SatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
