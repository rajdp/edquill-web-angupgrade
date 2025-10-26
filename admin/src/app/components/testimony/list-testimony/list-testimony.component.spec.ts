import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTestimonyComponent } from './list-testimony.component';

describe('ListTestimonyComponent', () => {
  let component: ListTestimonyComponent;
  let fixture: ComponentFixture<ListTestimonyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
