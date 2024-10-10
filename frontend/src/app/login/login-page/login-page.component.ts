import { Component, OnInit } from "@angular/core";
import { UserCredentials } from "../model/user-credentials";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onLogin(UserCredentials: UserCredentials) {
    this.authService.login(UserCredentials);
  }
}
