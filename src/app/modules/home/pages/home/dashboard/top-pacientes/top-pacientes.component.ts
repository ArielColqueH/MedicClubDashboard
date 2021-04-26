import { Component, Input, OnInit } from "@angular/core";
import { Patient } from "src/app/core/http/class/patient";

@Component({
  selector: "app-top-pacientes",
  templateUrl: "./top-pacientes.component.html",
  styleUrls: ["./top-pacientes.component.scss"],
})
export class TopPacientesComponent implements OnInit {
  @Input() datapatient: Patient;
  constructor() {}

  ngOnInit() {}
}
