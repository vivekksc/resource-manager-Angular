import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { MessageService } from '../SERVICES/message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  selectedEmployee: Employee;
  
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    // this.messageService.clear();
    this.getEmployees();
  }
  
  // onSelect(employee: Employee): void {
  //   this.selectedEmployee = employee;
  // }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        (data: Employee) => {
          this.messageService.clear();
          this.messageService.add('Employee deleted.');
          this.getEmployees();
        },
        (error: any) => console.log(error)
      );
      
  }
}