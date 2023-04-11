import { Component, ViewChild } from '@angular/core';
import { Employee } from './employee-template.model';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-template',
  templateUrl: './employee-template.component.html',
  styleUrls: ['./employee-template.component.scss'],
})
export class EmployeeTemplateComponent {
  displayedColumns: string[] = ['name', 'email', 'address', 'phone', 'action'];
  dataSource: any[] = [];
  isUpdate = false;
  selectedRow = -1;

  employee: any;
  employeeList = {
    Name: 'Searchable',
    Address: 'kathmandu',
    Email: 'Searchable@gmail.com',
    Phone: '900060000',
  };
  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {
    this.employee = new Employee(this.employeeList);
    // console.log(' this.employee', this.employee);
  }

  onSubmit() {
    console.log(this.employee);
    const dataSourceValues = this.employee;
    this.dataSource.push(dataSourceValues);
    this.table.renderRows(); //render the table row
    // employeeForm.form.reset();
    this.employee = null;
  }

  onUpdate(element: any) {
    this.isUpdate = true;
    alert(' edit event is fired');
    const rowIndex = this.dataSource.indexOf(element);
    console.log(rowIndex);
    this.selectedRow = rowIndex; // sve index inthe new variable

    this.employee.setValue = element;
  }
  onDelete() {}
}
