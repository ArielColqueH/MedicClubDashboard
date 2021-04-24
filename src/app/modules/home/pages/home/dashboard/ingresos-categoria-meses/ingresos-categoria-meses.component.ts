import { Component, OnInit } from "@angular/core";
import { multi } from "./data";

@Component({
  selector: "app-ingresos-categoria-meses",
  templateUrl: "./ingresos-categoria-meses.component.html",
  styleUrls: ["./ingresos-categoria-meses.component.scss"],
})
export class IngresosCategoriaMesesComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ["#3B28CC", "#2667FF", "#3F8EFC", "#87BFFF", "#A594F9"],
  };

  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
