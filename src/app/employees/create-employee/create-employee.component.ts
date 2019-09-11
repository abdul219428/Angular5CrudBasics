import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

// local imports
import { Department } from "src/app/models/department.model";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Pay Roll" },
    { id: 5, name: "Admin" }
  ];
  saveEmployee(empForm: NgForm) {
    console.log(empForm.value);
  }
  constructor() {}

  ngOnInit() {}
}
