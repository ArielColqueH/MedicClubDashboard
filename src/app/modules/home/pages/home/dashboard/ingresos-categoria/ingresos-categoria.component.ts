import { Component, OnInit, NgModule } from "@angular/core";
import {} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { single } from "./data";
@Component({
  selector: "app-ingresos-categoria",
  templateUrl: "./ingresos-categoria.component.html",
  styleUrls: ["./ingresos-categoria.component.scss"],
})
export class IngresosCategoriaComponent implements OnInit {
  single: any[];
  multi: any[];

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

  constructor() {
    Object.assign(this, { single });
  }
  ngOnInit() {}

  onSelect(event) {
    console.log(event);
  }
}
