import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { MessageService } from '../SERVICES/message.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.messageService.clear();
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
   this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }
  saveEmployee(employeeForm: NgForm): void {
    console.log(this.employee);
    this.employeeService.saveEmployee(this.employee)
      .subscribe(
        (data: Employee) => {
          this.messageService.clear();
          this.messageService.add('Employee updated.');
          this.router.navigate(['employees']);
        },
        (error: any) => console.log(error)
      );
  }

  goBack(): void {
    this.location.back();
  }
}