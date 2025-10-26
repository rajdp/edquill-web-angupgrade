import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseScheduleAddComponent } from './course-schedule-add.component';

describe('CourseScheduleAddComponent', () => {
  let component: CourseScheduleAddComponent;
  let fixture: ComponentFixture<CourseScheduleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseScheduleAddComponent]
    });
    fixture = TestBed.createComponent(CourseScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
