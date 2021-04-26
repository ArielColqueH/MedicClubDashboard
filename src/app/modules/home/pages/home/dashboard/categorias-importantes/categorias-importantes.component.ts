import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-categorias-importantes",
  templateUrl: "./categorias-importantes.component.html",
  styleUrls: ["./categorias-importantes.component.scss"],
})
export class CategoriasImportantesComponent implements OnInit {
  @Input() dataci;
  constructor() {}

  ngOnInit() {}
}
