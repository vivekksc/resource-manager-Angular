import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../employees/employee';
import { EMPLOYEES } from '../employees-data-model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('Fetched employees');
    return of(EMPLOYEES);
  }

  getEmployee(id: number): Observable<Employee> {
    this.messageService.add(`Fetched employee with id ${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }
}