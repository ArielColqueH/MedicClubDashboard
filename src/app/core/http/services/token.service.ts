import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public logout() {
    window.sessionStorage.clear();
  }
}
