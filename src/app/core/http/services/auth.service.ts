import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authURL = "http://localhost:8080/app-user/auth/";

  constructor(private httpClient: HttpClient) {}
  public login(usuario: User): Observable<any> {
    return this.httpClient.post(this.authURL + "login", usuario);
  }
}
