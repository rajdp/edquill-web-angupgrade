import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCategoryAddComponent } from './content-category-add.component';

describe('ContentCategoryAddComponent', () => {
  let component: ContentCategoryAddComponent;
  let fixture: ComponentFixture<ContentCategoryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCategoryAddComponent]
    });
    fixture = TestBed.createComponent(ContentCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
