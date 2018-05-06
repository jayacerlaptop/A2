import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
//     `<table>
//     <tr>
//     <td>First Name</td>
//     <td>{{firstName}}</td>
//     </tr>
//     <tr>
//     <td>Last Name</td>
//         <td>{{lastName}}</td>
//     </tr>
//     <tr>
//         <td>Gender</td>
//         <td>{{gender}}</td>
//     </tr>
//     <tr>
//         <td>Age</td>
//         <td>{{age}}</td>
//     </tr>
// </table>`
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}