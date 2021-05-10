import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-template-uno',
  templateUrl: './template-uno.component.html',
  styleUrls: ['./template-uno.component.css']
})
export class TemplateUnoComponent implements OnInit {
  id: Number = new Number;
  header!: string;
 
  constructor(private empployeeservice:EmployeeService, private route: ActivatedRoute,private router: Router) { }
  employees: Employee[] = [];  
  employee: Employee = new Employee;

 
  ngOnInit(): void {
    this.header = this.id ===0? 'Add Employee' : 'Edit Employee'
    console.log("id is "+this.id)
    if(this.id != 0)
    {
      console.log("edit mode")
      this.employee = this.empployeeservice.EditEmployee(this.id);
    }
    this.employees = this.empployeeservice.getEmployees();
 
  }
  
  Edit(id: Number = new Number)
  {console.log("in edit method " +id);
    this.id = id;
    if(this.id != 0)
    {
      console.log("edit mode 2")
      this.employee = this.empployeeservice.EditEmployee(this.id);
      console.log(this.employee);
    }
  }
  Delete(id: Number | undefined){
    this.empployeeservice.DeleteEmployee(id);
  }
  Register(form: NgForm){
    console.log("reg "+form.value.id);
    let employee: Employee = {
      id: form.value.id,
      Firstname: form.value.Firstname,
      Lastname: form.value.Lastname,
      age: form.value.age
    }
    console.log("1 "+this.id);
      console.log(employee);
      this.empployeeservice.RegisterEmployee(employee);//register or update employee
      this.employees = this.empployeeservice.getEmployees();
      
      console.log("got "+this.employees);
    form.resetForm();


  }
}

