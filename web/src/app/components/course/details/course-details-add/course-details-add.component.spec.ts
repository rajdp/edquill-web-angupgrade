import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsAddComponent } from './course-details-add.component';

describe('CourseDetailsAddComponent', () => {
  let component: CourseDetailsAddComponent;
  let fixture: ComponentFixture<CourseDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
