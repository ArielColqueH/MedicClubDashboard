import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  logotipo: string = "assets/images/logo.png";
  logo_big: string = "assets/images/login_img.svg";
  constructor() {}

  ngOnInit() {}
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
}
