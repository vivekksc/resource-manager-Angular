import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { MessageService } from '../SERVICES/message.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private route: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    this.employeeService.saveEmployee(this.employee)
      .subscribe(
        (data: Employee) => {
          this.messageService.clear();
          this.messageService.add('Employee created.');
          this.route.navigate(['employees']);
        },
        (error: any) => console.log(error)
      );
  }
}