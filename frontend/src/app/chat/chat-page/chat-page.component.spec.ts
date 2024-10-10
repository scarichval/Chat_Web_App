import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { ChatPageComponent } from "./chat-page.component";

describe("ChatPageComponent", () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatPageComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
