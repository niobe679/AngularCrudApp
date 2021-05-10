import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [{
    id: 1,
    Firstname: "netsanet",
    Lastname: "bahiru",
    age: 23
  }];
  constructor() { }
  getEmployees()
  {
    return this.employees
  }
  EditEmployee(id:Number | undefined){
    console.log("2 "+id)
    return this.employees.find(x=>x.id === id) || this.employees[0];
  }
  RegisterEmployee(employee: Employee){
    let employeeOld = this.employees.find(x=>x.id === employee.id)|| null;
    if(employeeOld !=null)
    {
      employeeOld.Firstname = employee.Firstname;
      employeeOld.Lastname = employee.Lastname;
      employeeOld.age = employee.age ; 
    }
    else
    {
      this.employees.push(employee);
    console.log("2 "+ this.employees.length);
    }
  }
  DeleteEmployee(id: Number | undefined){
    let employee = this.employees.find(x=>x.id === id) || this.employees[0];
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }
  UpdateEmployee(employeeNew: Employee){
    let employeeOld = this.employees.find(x=>x.id === employeeNew.id)|| this.employees[0];
    employeeOld.Firstname = employeeNew.Firstname;
    employeeOld.Lastname = employeeNew.Lastname;
    employeeOld.age = employeeNew.age ;

  }
}
