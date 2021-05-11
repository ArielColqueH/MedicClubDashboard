import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Specialty } from "src/app/core/http/models/specialties";

@Component({
  selector: "app-formulario-registro",
  templateUrl: "./formulario-registro.component.html",
  styleUrls: ["./formulario-registro.component.scss"],
})
export class FormularioRegistroComponent implements OnInit {
  formVar: FormGroup;
  nombreFormControl = new FormControl("", [Validators.required]);
  apellidoFormControl = new FormControl("", [Validators.required]);
  fechaFormControl = new FormControl("", [Validators.required]);
  categoriaSeleccionada = new FormControl("", [Validators.required]);
  sexoSeleccionado = new FormControl("", [Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      nombreFormControl: this.nombreFormControl,
      apellidoFormControl: this.apellidoFormControl,
      fechaFormControl: this.fechaFormControl,
      categoriaSeleccionada: this.categoriaSeleccionada,
      sexoSeleccionado: this.sexoSeleccionado,
    });
  }

  doctorsSpecialty: Specialty[] = [
    { specialty_id: 1, specialty_name: "Dermatologia" },
    { specialty_id: 2, specialty_name: "Neomologia" },
    { specialty_id: 3, specialty_name: "Cardiologia" },
    { specialty_id: 4, specialty_name: "Pediatria" },
    { specialty_id: 5, specialty_name: "Odontologia" },
  ];
  guardarDoctor() {
    console.log(this.formVar.value);
  }
}
