import { HttpResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { User } from "src/app/core/http/models/user";
import { AuthService } from "src/app/core/http/services/auth.service";
import { TokenService } from "src/app/core/http/services/token.service";
import { FailComponent } from "src/app/dialogs/alerts/fail/fail.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  user: User;
  logotipo: string = "assets/images/logo.png";
  logo_big: string = "assets/images/login_img.svg";
  formVar: FormGroup;
  errMjs: string;

  correoFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  contraseniaFormControl = new FormControl("", [Validators.required]);
  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.formVar = this.fb.group({
      email: this.correoFormControl,
      password: this.contraseniaFormControl,
    });
  }

  ingresar() {
    // this.user = this.formVar;
    var user2: User = {
      email: this.formVar.value.email,
      password: this.formVar.value.password,
    };
    this.authService.login(user2).subscribe(
      (data) => {
        this.isLogged = true;
        this.tokenService.setToken(data.JWT);
        console.log("estas logeado!");
        if (this.isLogged) {
          this.router.navigate(["/dashboard"]);
        }
      },
      (err) => {
        this.isLogged = false;
        this.openFailDialog();
        console.log("Error en el correo o constraseña, vuelva a intentarlo");
      }
    );
    console.log(this.formVar.value);
  }
  openFailDialog() {
    this.dialog.open(FailComponent, {
      data: {
        title: "Error de Ingreso",
        message: "Error en el correo o constraseña, vuelva a intentarlo",
      },
    });
  }
}
