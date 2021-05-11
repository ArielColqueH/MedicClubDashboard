import { Component, OnInit, NgModule, Input } from "@angular/core";
import {} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { IncomeByCategory } from "src/app/core/http/models/income-by-category";
import { IncomeByMonth } from "src/app/core/http/models/income-by-month";
import { MostImportantDoctors } from "src/app/core/http/models/most-important-doctors";
import { DashboardService } from "src/app/core/http/services/dashboard.service";

@Component({
  selector: "app-ingresos-categoria",
  templateUrl: "./ingresos-categoria.component.html",
  styleUrls: ["./ingresos-categoria.component.scss"],
})
export class IngresosCategoriaComponent implements OnInit {
  single = [];

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

  constructor(private service: DashboardService) {}
  ngOnInit() {
    this.ObtenerIngresoPorCategorias();
  }

  onSelect(event) {
    console.log(event);
  }

  ObtenerIngresoPorCategorias() {
    this.service.ingresoPorCategorias().subscribe((data) => {
      this.single = data.data.map((datos) => ({
        name: datos.category,
        value: datos.amount,
      }));
      //console.log(this.single);
    });
  }
}
