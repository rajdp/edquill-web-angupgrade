import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAnnouncementListComponent } from './global-announcement-list.component';

describe('GlobalAnnouncementComponent', () => {
  let component: GlobalAnnouncementListComponent;
  let fixture: ComponentFixture<GlobalAnnouncementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalAnnouncementListComponent]
    });
    fixture = TestBed.createComponent(GlobalAnnouncementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
