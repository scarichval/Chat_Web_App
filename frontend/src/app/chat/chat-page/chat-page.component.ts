import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Subscription} from "rxjs";
import {AuthenticationService} from "src/app/login/authentication.service";
import {Message} from "../message.model";
import {MessagesService} from "../messages.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-chat-page",
    templateUrl: "./chat-page.component.html",
    styleUrls: ["./chat-page.component.css"],
})
export class ChatPageComponent implements OnInit, OnDestroy {
    messages$ = this.messagesService.getMessages();


    messages: Message[] = [];
    messageSubscription: Subscription;

    constructor(
        private messagesService: MessagesService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.messageSubscription = this.messages$.subscribe(newMsg => {
            this.messages = newMsg;
        })
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
    }


    onLogout() {
        this.authenticationService.logout();
        this.router.navigate(['/'])
    }


}
