import { Component, Input, OnInit } from "@angular/core";
import { Doctor } from "src/app/core/http/class/doctor";
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
    {
      imageUrl: "",
      title: "Cardiologia",
      price: 1000,
      detail: "55% del total",
    },
    { imageUrl: "", title: "Pediatria", price: 800, detail: "55% del total" },
    {
      imageUrl: "",
      title: "Odontologia",
      price: 1200,
      detail: "55% del total",
    },
    { imageUrl: "", title: "Neumologia", price: 500, detail: "55% del total" },
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

  doctor: Doctor[] = [
    {
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      first_name: "Juan",
      last_name: "Fernandez",
      specialty: "Dermatologo",
      stars: 4.55,
      patients: 55,
      percentage_appointments: 80.2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      first_name: "Joaquin",
      last_name: "Gutierrez",
      specialty: "Neumologo",
      stars: 4.55,
      patients: 55,
      percentage_appointments: 85.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      first_name: "Erwin",
      last_name: "Alejo",
      specialty: "Cardiologo",
      stars: 3.55,
      patients: 56,
      percentage_appointments: 96.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      first_name: "Ximena",
      last_name: "Cruz",
      specialty: "Odontologa",
      stars: 4.8,
      patients: 89,
      percentage_appointments: 78.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      first_name: "Silvana",
      last_name: "Muñoz",
      specialty: "Pediatria",
      stars: 4.05,
      patients: 65,
      percentage_appointments: 86.7,
    },
  ];

  ngOnInit() {}
}
