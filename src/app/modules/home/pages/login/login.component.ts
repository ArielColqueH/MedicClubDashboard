import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  logotipo: string = "assets/images/logo.png";
  logo_big: string = "assets/images/login_img.svg";
  formVar: FormGroup;
  correoFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  contraseniaFormControl = new FormControl("", [Validators.required]);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      correoFormControl: this.correoFormControl,
      contraseniaFormControl: this.contraseniaFormControl,
    });
  }
  ingresar() {
    console.log(this.formVar.value);
  }
}
