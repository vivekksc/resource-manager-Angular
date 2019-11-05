import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }, // DEFAULT ROUTE
  { path: 'employees', component: EmployeesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }