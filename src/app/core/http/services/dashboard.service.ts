import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  authURL = "http://localhost:8080/dashboard/";
  token = "";

  constructor(private httpClient: HttpClient) {}

  public ingresoPorCategorias(): Observable<any> {
    const headers = { Authorization: "Bearer " + this.token };
    return this.httpClient.post(this.authURL + "income_category", { headers });
  }
}
