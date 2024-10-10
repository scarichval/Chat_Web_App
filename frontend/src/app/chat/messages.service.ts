import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "./message.model";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  messages = new BehaviorSubject<Message[]>([]);

  constructor() {}

  postMessage(message: Message): void {
    //recuperer le tableau actuel de messages
    const currentMessages = this.messages.value;

    //ajouter le nouveau msg au tableau de messages
    const updatedMessages = [...currentMessages, message];

    //emettre le nouveau tableau de messages
    this.messages.next(updatedMessages);

  }

  getMessages(): Observable<Message[]> {
    return this.messages.asObservable();
  }
}
