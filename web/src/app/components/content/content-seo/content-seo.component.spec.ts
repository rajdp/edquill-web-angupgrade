import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSeoComponent } from './content-seo.component';

describe('ContentSeoComponent', () => {
  let component: ContentSeoComponent;
  let fixture: ComponentFixture<ContentSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSeoComponent]
    });
    fixture = TestBed.createComponent(ContentSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
