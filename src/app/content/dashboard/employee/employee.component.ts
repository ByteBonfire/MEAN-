import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeform: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'age', 'position', 'action'];
  dataSource: any[] = [];

  isUpdate = false;
  selectedRow = -1;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {
    this.employeeform = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  onSave() {
    if (this.employeeform.invalid) {
      alert('Please Enter the value before proceeding');
    } else {
      // console.log(this.employeeform.value);
      const dataSourceValues = this.employeeform.value;
      this.dataSource.push(dataSourceValues);
      this.table.renderRows(); //render the table row
      this.isUpdate = false;
      this.employeeform.reset();
    }
  }

  onUpdate(element: any) {
    this.isUpdate = true;
    // alert(' edit event is fired');
    const rowIndex = this.dataSource.indexOf(element);
    // console.log(rowIndex);
    this.selectedRow = rowIndex; // sve index inthe new variable
    
    // this.employeeform.controls['id'].setValue(element.id);
    // this.employeeform.controls['name'].setValue(element.name);
    // this.employeeform.controls['age'].setValue(element.age);
    // this.employeeform.controls['position'].setValue(element.position);
    
    // use this instead of above multiple line code
    this.employeeform.setValue(element)
  }

  OnChange() {
    const editedData = this.employeeform.value;
    this.dataSource[this.selectedRow] = editedData;
    this.table.renderRows(); //render the table row
    this.employeeform.reset();
    this.isUpdate = false;
    this.selectedRow = -1;
  }

  onDelete(element: any) {
    const rowIndex = this.dataSource.indexOf(element);
    this.dataSource.splice(rowIndex, 1);
    this.table.renderRows(); //render the table row
  }
}
//  dirty // change
//  touch  // touch
//  pristine // clear
