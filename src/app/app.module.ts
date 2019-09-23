import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  //attribures: value

  declarations: [AppComponent],

  //other modules to be imported
  imports: [
    BrowserModule
    //display of Ui in browser
  ],
  //provider related to provide services (angular services )
  //dependeniy injection done by provider
  providers: [],

  //Boostarping of Application nothing to do with bootstarap
  bootstrap: [AppComponent]

  //App componet in rrot component , all ui will be embeded in Appcomponent
  //boostrap is an array, eager Loding =resources will be laded at application start up itself, occuping memory disad, adv, resouce is avilable
  //lazy loding when needed then to load
  //[]in bootstap all comp will be eager loded and Appcompoent will be root compoonent.
  //order is important
  //bbostarp is for eager loding
})
export class AppModule {}
