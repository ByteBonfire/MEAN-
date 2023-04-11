import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, SharedModule],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
