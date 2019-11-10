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
    showDetails: boolean = false;

    toggleDetails(): void{
this.showDetails = !this.showDetails;
    }
}
