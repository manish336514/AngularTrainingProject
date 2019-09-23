import { Component } from "@angular/core";
//Decorated with @Component
//@Component is Decorater for Appcomponent
//Get new class with addtional feateres added by decorater
@Component({
  //3.where it needs to be rendered
  selector: "app-root",
  //1.what needs to be rendered in Ui
  templateUrl: "./app.component.html",
  //2.How it needs to be rendered in UI menas Style
  styleUrls: ["./app.component.css"]
  //style ulr is an array, will be applied as in oreder as mentioned
  //customised for this component only
})

//Compoent is peace of UI
export class AppComponent {
  title = "day01";
}
