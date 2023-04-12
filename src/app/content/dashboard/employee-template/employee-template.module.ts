import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTemplateComponent } from './employee-template.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'templateEmployee', component: EmployeeTemplateComponent },
];

@NgModule({
  declarations: [EmployeeTemplateComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [EmployeeTemplateComponent],
})
export class EmployeeTemplateModule {}
