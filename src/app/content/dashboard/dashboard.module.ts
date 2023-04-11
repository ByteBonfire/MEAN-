import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EmployeeModule } from './employee/employee.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/service/auth.guard';
import { EmployeeTemplateModule } from './employee-template/employee-template.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    EmployeeModule,
    RouterModule.forChild(routes),
    SharedModule,
    EmployeeTemplateModule,
  ],
  providers: [AuthGuard],
})
export class DashboardModule {}
