import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  authURL = "http://localhost:8080/dashboard/";
  token = this.tokenService.getToken();

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public ingresoPorCategorias(): Observable<any> {
    const headers = { Authorization: "Bearer " + this.token };
    return this.httpClient.get<any>(this.authURL + "income_category", {
      headers,
    });
  }
  public doctorMasImportantes(): Observable<any> {
    const headers = { Authorization: "Bearer " + this.token };
    return this.httpClient.get<any>(this.authURL + "most_important_doctors", {
      headers,
    });
  }
}
//
