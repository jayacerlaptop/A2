import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'

  // `<div>
  //                 <h1>{{pageHeader}}</h1>
  //                 <my-employee></my-employee>
  //            </div>`
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  isDisabled: boolean = false;
  fontSize: number = 30;
  name: string = 'Tom';


  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}