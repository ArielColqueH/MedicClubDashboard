import { Component, Input, OnInit } from "@angular/core";
import { Doctor } from "src/app/core/http/models/doctor";

@Component({
  selector: "app-top-medicos",
  templateUrl: "./top-medicos.component.html",
  styleUrls: ["./top-medicos.component.scss"],
})
export class TopMedicosComponent implements OnInit {
  @Input() datadoctor: Doctor;
  constructor() {}

  ngOnInit() {}
}
