import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCategoryComponent } from './content-category.component';

describe('ContentCategoryComponent', () => {
  let component: ContentCategoryComponent;
  let fixture: ComponentFixture<ContentCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCategoryComponent]
    });
    fixture = TestBed.createComponent(ContentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
