import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageFormComponent } from './new-message-form.component';

describe('NewMessageFormComponent', () => {
  let component: NewMessageFormComponent;
  let fixture: ComponentFixture<NewMessageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMessageFormComponent]
    });
    fixture = TestBed.createComponent(NewMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
