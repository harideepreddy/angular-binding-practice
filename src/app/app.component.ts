import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <emp></emp>
    `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    pageHeader: string = "Employee details";
    showdetails:boolean = false;
    toogleDetails(): void{
this.showdetails = !this.showdetails;
    }
}
