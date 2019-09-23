import { Component } from "@angular/core";
//Decorated with @Component
//@Component is Decorater for Appcomponent
//Get new class wirth addtional feteres added by decorater
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "day01";
}
