import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {TinyMiceComponent} from './tiny-mice.component';

describe('TinyMiceComponent', () => {
  let component: TinyMiceComponent;
  let fixture: ComponentFixture<TinyMiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyMiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyMiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
