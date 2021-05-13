import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Doctor } from "../models/doctor";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class RegistroService {
  token = this.tokenService.getToken();
  authURL = "http://localhost:8080/doctors/sign-up";

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}
  public guardarDoctor(doctor: Doctor): Observable<any> {
    const headers = { Authorization: "Bearer " + this.token };
    return this.httpClient.post(this.authURL, doctor, { headers });
  }
}
