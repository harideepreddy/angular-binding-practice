import { Component } from '@angular/core';
@Component({
  selector: 'emp',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  })
export class EmployeeComponent{
columnspan: number = 2;
firstname:string = "harideep";
lastname:string = "reddy";
gender: string = "male";
age: number = 24;
}