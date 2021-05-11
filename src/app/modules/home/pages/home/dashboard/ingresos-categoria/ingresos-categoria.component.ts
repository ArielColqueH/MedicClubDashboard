import { Component, OnInit, NgModule, Input } from "@angular/core";
import {} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { IncomeByMonth } from "src/app/core/http/models/income-by-month";
import { DashboardService } from "src/app/core/http/services/dashboard.service";
import { single } from "./data";
@Component({
  selector: "app-ingresos-categoria",
  templateUrl: "./ingresos-categoria.component.html",
  styleUrls: ["./ingresos-categoria.component.scss"],
})
export class IngresosCategoriaComponent implements OnInit {
  single: IncomeByMonth[];

  view: any[] = [300, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  xAxisLabel = "Categoria";
  yAxisLabel = "Ingresos";
  xLabelRotated = true;

  colorScheme = {
    domain: ["#19D3DA"],
  };

  constructor(private service: DashboardService) {
    Object.assign(this, { single });
  }
  ngOnInit() {
    this.ObtenerDatos();
  }

  onSelect(event) {
    console.log(event);
  }

  ObtenerDatos() {
    this.service
      .ingresoPorCategorias()
      .subscribe((data) => (this.single = data));
    //this.aux = this.listaEspecialidades;
  }
}
