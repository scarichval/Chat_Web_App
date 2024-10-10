import {AfterViewChecked, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Message} from "../message.model";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements AfterViewChecked{
    @ViewChild('scrollMe', {static: false}) private myScrollContainer!: ElementRef; // pour l'affichage du message le plus recent

    @Input() messages: Message[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    /** Afficher la date seulement si la date du message précédent est différente du message courant. */
    showDateHeader(messages: Message[] | null, i: number) {
        if (messages != null) {
            if (i === 0) {
                return true;
            } else {
                const prev = new Date(messages[i - 1].timestamp).setHours(0, 0, 0, 0);
                const curr = new Date(messages[i].timestamp).setHours(0, 0, 0, 0);
                return prev != curr;
            }
        }
        return false;
    }

    // Affichage du plus recent message
    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) {
        }
    }

}
