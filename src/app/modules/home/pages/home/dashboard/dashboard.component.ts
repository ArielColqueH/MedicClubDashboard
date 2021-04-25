import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  numero: number = 4;
  impCategory: ImportantCategory[] = [
    { title: "Cardiologia", price: 1000, detail: "55% del total" },
    { title: "Pediatria", price: 800, detail: "55% del total" },
    { title: "Odontologia", price: 1200, detail: "55% del total" },
    { title: "Neumologia", price: 500, detail: "55% del total" },
  ];
  constructor() {}

  ngOnInit() {}
}
class ImportantCategory {
  title: string;
  price: number;
  detail: string;
}
