import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
];

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
