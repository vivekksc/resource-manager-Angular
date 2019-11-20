import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { AdalGuard } from 'adal-angular4';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard', canActivate: [AdalGuard] }, // DEFAULT ROUTE
  { path: 'employees', component: EmployeesComponent, canActivate: [AdalGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdalGuard] },
  { path: 'create', component: EmployeeCreateComponent, canActivate: [AdalGuard] },
  { path: 'detail/:id', component: EmployeeDetailComponent, canActivate: [AdalGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }