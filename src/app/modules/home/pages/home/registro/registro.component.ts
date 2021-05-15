import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FailComponent } from "src/app/dialogs/alerts/fail/fail.component";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"],
})
export class RegistroComponent implements OnInit {
  register_img: string = "assets/images/register.svg";
  constructor() {}

  ngOnInit() {}
}
