export class Employee {
  name = '';
  address = '';
  email = '';
  phone = '';

  constructor(employee: any) {
    this.name = employee.Name;
    this.address = employee.Address;
    this.email = employee.Email;
    this.phone = employee.Phone;
  }
}
