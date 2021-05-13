import { Component, Input, OnInit } from "@angular/core";
import { Patient } from "src/app/core/http/models/patient";
import { TopMostAttendedPatients } from "src/app/core/http/models/top-most-attended-patients";

@Component({
  selector: "app-top-pacientes",
  templateUrl: "./top-pacientes.component.html",
  styleUrls: ["./top-pacientes.component.scss"],
})
export class TopPacientesComponent implements OnInit {
  @Input() datapatient: TopMostAttendedPatients;
  constructor() {}

  ngOnInit() {}
}
