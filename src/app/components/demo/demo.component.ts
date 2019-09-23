import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  message;
  vegetables;
  //or message:string
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit called...");
    this.message = "Hello World";
    this.vegetables = [
      { name: "Brinjal", price: 14 },
      { name: "Bottle Ground", price: 25 },
      { name: "Tomato", price: 15 },
      { name: "Patato", price: 25 }
    ];
  }

  bntClicked(event) {
    // alert("The Button Was Clicked");
    console.log(event);
  }
  deleteVeg(index: number) {
    this.vegetables.splice(index, 1);
  }

  addVeg(name, price) {
    console.log("veg", name, price);

    var addvegitable = {
      name: name,
      price: price
    };
    console.log("addvegitable", addvegitable);
    this.vegetables.push(addvegitable);
  }
}
