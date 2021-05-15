import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-fail",
  templateUrl: "./fail.component.html",
  styleUrls: ["./fail.component.scss"],
})
export class FailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  title: string;
  message: string;

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }
}
