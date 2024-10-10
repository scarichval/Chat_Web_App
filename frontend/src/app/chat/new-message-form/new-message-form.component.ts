import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MessagesService} from "../messages.service";
import {AuthenticationService} from "../../login/authentication.service";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-new-message-form',
    templateUrl: './new-message-form.component.html',
    styleUrls: ['./new-message-form.component.css']
})
export class NewMessageFormComponent implements OnInit, OnDestroy{
    username$ = this.authenticationService.getUsername();

    messageForm = this.fb.group({
        msg: "",
    });

    username: string | null = null;
    usernameSubscription: Subscription;

    constructor(private messagesService: MessagesService,
                private authenticationService: AuthenticationService,
                private fb: FormBuilder) {
        this.usernameSubscription = this.username$.subscribe((u) => {
            this.username = u;
        });
    }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        if (this.usernameSubscription) {
            this.usernameSubscription.unsubscribe();
        }
    }

    onPublishMessage() {
        if (this.username && this.messageForm.valid && this.messageForm.value.msg) {
            this.messagesService.postMessage({
                text: this.messageForm.value.msg,
                username: this.username,
                timestamp: Date.now(),
            });

        }
        this.messageForm.reset();
    }
}
