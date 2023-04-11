import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTemplateComponent } from './employee-template.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EmployeeTemplateComponent],
  imports: [CommonModule, SharedModule],
  exports: [EmployeeTemplateComponent],
})
export class EmployeeTemplateModule {}
