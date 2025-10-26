import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFaqAddComponent } from './course-faq-add.component';

describe('CourseFaqAddComponent', () => {
  let component: CourseFaqAddComponent;
  let fixture: ComponentFixture<CourseFaqAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFaqAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFaqAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
