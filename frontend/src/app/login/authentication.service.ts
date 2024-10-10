import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserCredentials } from "./model/user-credentials";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  static KEY = "username";

  private username = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {
    this.username.next(localStorage.getItem(AuthenticationService.KEY));
  }

  login(userCredentials: UserCredentials) {
    // Stockage du username dans le localStorage
    localStorage.setItem(AuthenticationService.KEY, userCredentials.username);

    // Mise a jour du BehaviorSubject avec la nouvelle valeur de username
    this.username.next(userCredentials.username);

    //redirection de l'usager vers la page de chat
    this.router.navigate(['/chat']);
  }

  logout() {
    //vider le localStorage
    localStorage.clear();

    //Mise a jour de BehaviorSubject
    this.username.next(null);
  }

  getUsername(): Observable<string | null> {
    return this.username.asObservable();
  }
}
