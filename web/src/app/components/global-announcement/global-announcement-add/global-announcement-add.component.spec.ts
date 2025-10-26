import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAnnouncementAddComponent } from './global-announcement-add.component';

describe('GlobalAnnouncementAddComponent', () => {
  let component: GlobalAnnouncementAddComponent;
  let fixture: ComponentFixture<GlobalAnnouncementAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalAnnouncementAddComponent]
    });
    fixture = TestBed.createComponent(GlobalAnnouncementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
