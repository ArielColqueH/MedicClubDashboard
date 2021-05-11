import { HttpResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { User } from "src/app/core/http/models/user";
import { AuthService } from "src/app/core/http/services/auth.service";
import { TokenService } from "src/app/core/http/services/token.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoggedFail = false;
  user: User;
  logotipo: string = "assets/images/logo.png";
  logo_big: string = "assets/images/login_img.svg";
  formVar: FormGroup;
  errMjs: string;
  user2: User = {
    email: "admin@admin.com",
    password: "123456",
  };

  correoFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  contraseniaFormControl = new FormControl("", [Validators.required]);
  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoggedFail = false;
    }
    this.formVar = this.fb.group({
      email: this.correoFormControl,
      password: this.contraseniaFormControl,
    });
  }

  ingresar() {
    // this.user = this.formVar;
    this.authService.login(this.user2).subscribe(
      (data) => {
        // this.isLogged = true;
        // this.isLoggedFail = false;
        //this.tokenService.setToken(data);
        console.log("estas logeado!");
        console.log(data);
      },
      (err) => {
        this.isLogged = false;
        this.isLoggedFail = true;
        this.errMjs = err.error.mensaje;
        console.log(this.errMjs);
      }
    );
    console.log(this.formVar.value);
  }
}
