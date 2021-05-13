import { Component, Input, OnInit } from "@angular/core";
import { MostImportantCategories } from "src/app/core/http/models/most-important-categories";

@Component({
  selector: "app-categorias-importantes",
  templateUrl: "./categorias-importantes.component.html",
  styleUrls: ["./categorias-importantes.component.scss"],
})
export class CategoriasImportantesComponent implements OnInit {
  @Input() dataci: MostImportantCategories;
  constructor() {}

  ngOnInit() {}
}
