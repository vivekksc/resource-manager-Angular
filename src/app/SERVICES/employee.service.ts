import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers, response } from '@angular/http';
import { Employee } from '../employees/employee';
import { EMPLOYEES } from '../employees-data-model';
import { MessageService } from './message.service';
import { AdalService } from 'adal-angular4';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  user: any;
  profile: any;

  constructor(
    private adalService: AdalService,
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.user = this.adalService.userInfo;
    console.log(this.user);
    console.log(this.adalService.userInfo.token);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.adalService.userInfo.token}`
  });

  getEmployees(): Observable<Employee[]> {
    // this.messageService.add('Fetched employees');
    return this.http.get<Employee[]>('https://resourceman-api.azurewebsites.net/api/employees', {headers : this.headers});
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee[]>('https://resourceman-api.azurewebsites.net/api/employees/'+id);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    if (employee.id)
      return this.http.put<Employee>(
        'https://resourceman-api.azurewebsites.net/api/employees/'+employee.id,
        employee,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        });
    else
      return this.http.post<Employee>(
        'https://resourceman-api.azurewebsites.net/api/employees/',
        employee,
        {
          rs: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        });
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee[]>('https://resourceman-api.azurewebsites.net/api/employees/'+id);
  }
}