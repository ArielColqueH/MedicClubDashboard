import { Component, Input, OnInit } from "@angular/core";
import { Doctor } from "src/app/core/http/models/doctor";
import { MostImportantDoctors } from "src/app/core/http/models/most-important-doctors";
import { DashboardService } from "src/app/core/http/services/dashboard.service";

@Component({
  selector: "app-top-medicos",
  templateUrl: "./top-medicos.component.html",
  styleUrls: ["./top-medicos.component.scss"],
})
export class TopMedicosComponent implements OnInit {
  @Input() datadoctor: MostImportantDoctors;
  constructor() {}

  ngOnInit() {}
}
