import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginPageComponent } from "./login-page.component";
import { LoginFormComponent } from "../login-form/login-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("LoginPageComponent", () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent, LoginFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
