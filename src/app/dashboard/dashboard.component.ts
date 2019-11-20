import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { MessageService } from '../SERVICES/message.service';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private adalService: AdalService,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.adalService.handleWindowCallback();
    this.messageService.clear();
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0,3));
  }
}