import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserCredentials } from "../model/user-credentials";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    username: "",
    password: "",
  });

  @Output()
  login = new EventEmitter<UserCredentials>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onLogin() {
    if(this.loginForm.valid){
      const userCredentials: UserCredentials = {
        username: this.loginForm.get('username')?.value|| '',
        password: this.loginForm.get('password')?.value || ''
      };

      this.login.emit(userCredentials);
    }
  }



}
