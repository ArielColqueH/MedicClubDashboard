import { Component, Input, OnInit } from "@angular/core";
import { IngresosCategoria } from "src/app/core/http/class/ingresoscategoria";
import { Patient } from "src/app/core/http/class/patient";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  itemci: any;
  constructor() {}

  numero: number = 4;
  impCategory: IngresosCategoria[] = [
    { title: "Cardiologia", price: 1000, detail: "55% del total" },
    { title: "Pediatria", price: 800, detail: "55% del total" },
    { title: "Odontologia", price: 1200, detail: "55% del total" },
    { title: "Neumologia", price: 500, detail: "55% del total" },
  ];

  patients: Patient[] = [
    {
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
      first_name: "ariel",
      last_name: "colque",
      appointments: 40,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      first_name: "mariana",
      last_name: "cardozo",
      appointments: 50,
    },
    {
      image:
        "https://images.unsplash.com/photo-1531384698654-7f6e477ca221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=645&q=80",
      first_name: "alvin",
      last_name: "poma",
      appointments: 80,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      first_name: "antonio",
      last_name: "rocha",
      appointments: 50,
    },
    {
      image:
        "https://images.unsplash.com/photo-1512663150964-d8f43c899f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
      first_name: "erwin",
      last_name: "alejo",
      appointments: 40,
    },
  ];

  ngOnInit() {}
}
