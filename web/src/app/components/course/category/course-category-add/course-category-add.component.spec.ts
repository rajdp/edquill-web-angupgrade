import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoryAddComponent } from './course-category-add.component';

describe('CourseListAddComponent', () => {
  let component: CourseCategoryAddComponent;
  let fixture: ComponentFixture<CourseCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
