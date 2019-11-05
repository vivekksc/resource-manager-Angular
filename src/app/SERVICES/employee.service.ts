import { Injectable } from '@angular/core';
import { Employee } from '../employees/employee';
import { EMPLOYEES } from '../employees-data-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
}