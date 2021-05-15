import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Doctor } from "src/app/core/http/models/doctor";
import { Specialty } from "src/app/core/http/models/specialties";
import { RegistroService } from "src/app/core/http/services/registro.service";

@Component({
  selector: "app-formulario-registro",
  templateUrl: "./formulario-registro.component.html",
  styleUrls: ["./formulario-registro.component.scss"],
})
export class FormularioRegistroComponent implements OnInit {
  doctosDatos: Doctor;

  correo: string = "";
  contrasenia: string = "123456";
  nombre: string = "";
  apellido: string = "";
  categoria: string;
  score: string = "0";
  // formVar: FormGroup;
  // nombreFormControl = new FormControl("", [Validators.required]);
  // apellidoFormControl = new FormControl("", [Validators.required]);
  // fechaFormControl = new FormControl("", [Validators.required]);
  // categoriaSeleccionada = new FormControl("", [Validators.required]);
  // sexoSeleccionado = new FormControl("", [Validators.required]);

  constructor(private service: RegistroService) {}

  ngOnInit() {}

  doctorsSpecialty: Specialty[] = [
    { specialty_id: "1", specialty_name: "Odontologia" },
    { specialty_id: "2", specialty_name: "Dermatologia" },
    { specialty_id: "3", specialty_name: "Neumologia" },
    { specialty_id: "4", specialty_name: "Pediatria" },
    { specialty_id: "5", specialty_name: "Cardiologia" },
  ];
  changeClient(value) {
    console.log(value);
    this.categoria = value;
  }

  guardarDoctor() {
    var aux: Doctor = {
      email: this.correo,
      password: this.contrasenia,
      first_name: this.nombre,
      last_name: this.apellido,
      id_specialty: this.categoria,
      score: this.score,
    };
    this.service.guardarDoctor(aux).subscribe(
      (data) => {
        console.log("Doctor registrado");
        //console.log(this.doctoresImportantes);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(aux);
  }
}
