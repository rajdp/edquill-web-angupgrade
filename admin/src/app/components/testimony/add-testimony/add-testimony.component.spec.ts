import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddTestimonyComponent } from './add-testimony.component';

describe('AddTestimonyComponent', () => {
  let component: AddTestimonyComponent;
  let fixture: ComponentFixture<AddTestimonyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
