import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login/login-page/login-page.component";
import { LoginFormComponent } from "./login/login-form/login-form.component";
import { ChatPageComponent } from "./chat/chat-page/chat-page.component";
import { MessagesComponent } from './chat/messages/messages.component';
import { NewMessageFormComponent } from './chat/new-message-form/new-message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    ChatPageComponent,
    MessagesComponent,
    NewMessageFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
