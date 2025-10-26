import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxChatComponent } from './inbox-chat.component';

describe('InboxChatComponent', () => {
  let component: InboxChatComponent;
  let fixture: ComponentFixture<InboxChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxChatComponent]
    });
    fixture = TestBed.createComponent(InboxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
