import { Component, Input, OnInit } from "@angular/core";
import { Doctor } from "src/app/core/http/models/doctor";
import { IngresosCategoria } from "src/app/core/http/models/ingresoscategoria";
import { MostImportantCategories } from "src/app/core/http/models/most-important-categories";
import { MostImportantDoctors } from "src/app/core/http/models/most-important-doctors";
import { Patient } from "src/app/core/http/models/patient";
import { TopMostAttendedPatients } from "src/app/core/http/models/top-most-attended-patients";
import { DashboardService } from "src/app/core/http/services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  itemci: any;
  doctoresImportantes: MostImportantDoctors[];
  pacientesImportantes: TopMostAttendedPatients[];
  categoriasImportantes: MostImportantCategories[];

  constructor(private service: DashboardService) {}
  numero: number = 4;

  ngOnInit() {
    this.ObtenerDoctoresMasImportantes();
    this.ObtenerUsuarioMasConcurridos();
    this.ObtenerCategoriasMasImportantes();
  }
  onSelect(event) {
    console.log(event);
  }
  ObtenerDoctoresMasImportantes() {
    this.service.doctorMasImportantes().subscribe((data) => {
      this.doctoresImportantes = data.data;
      //console.log(this.doctoresImportantes);
    });
  }

  ObtenerUsuarioMasConcurridos() {
    this.service.pacientesMasImportantes().subscribe((data) => {
      this.pacientesImportantes = data.data;
      //console.log(this.pacientesImportantes);
    });
  }

  ObtenerCategoriasMasImportantes() {
    this.service.categoriasMasImportantes().subscribe((data) => {
      this.categoriasImportantes = data.data;
      //console.log(this.pacientesImportantes);
    });
  }
}
