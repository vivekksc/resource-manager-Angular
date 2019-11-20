import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeService } from './SERVICES/employee.service';
import { MessageService } from './SERVICES/message.service';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EmployeesComponent, EmployeeDetailComponent, MessagesComponent, LayoutComponent, DashboardComponent, EmployeeCreateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AdalService,
    AdalGuard,
    EmployeeService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }]
})
export class AppModule { }
