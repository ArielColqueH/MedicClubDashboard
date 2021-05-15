import { Component, OnInit } from "@angular/core";
import { AttendanceByGender } from "src/app/core/http/models/AttendanceByGender";
import { DashboardService } from "src/app/core/http/services/dashboard.service";
@Component({
  selector: "app-atencion-genero",
  templateUrl: "./atencion-genero.component.html",
  styleUrls: ["./atencion-genero.component.scss"],
})
export class AtencionGeneroComponent implements OnInit {
  single: AttendanceByGender[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = "below";

  colorScheme = {
    domain: ["#19D3DA", "#B7F9FC"],
  };
  ngOnInit() {
    this.ObtenerAtencionPorGenero();
  }
  constructor(private service: DashboardService) {}

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  ObtenerAtencionPorGenero() {
    this.service.atencionPorGenero().subscribe((data) => {
      this.single = data.data.map((datos) => ({
        name: datos.gender,
        value: datos.percentage,
      }));
    });
  }
}
