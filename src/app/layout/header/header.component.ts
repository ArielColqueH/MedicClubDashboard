import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "src/app/core/http/services/token.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private service: TokenService, private router: Router) {}

  ngOnInit() {}
  salir() {
    this.service.logout();
    this.router.navigate(["/login"]);
    console.log("logout");
  }
}
