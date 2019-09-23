import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  message;
  //or message:string
  constructor() {
    this.message = "Hello World";
  }

  ngOnInit() {}
}
