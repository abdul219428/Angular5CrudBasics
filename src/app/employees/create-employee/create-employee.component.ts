import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

// local imports
import { Department } from "src/app/models/department.model";
import { Employee } from "src/app/models/employee.model";

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
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  saveEmployee(employee: Employee):void {
    console.log(employee);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  constructor() {
    this.datePickerConfig = Object.assign(

      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,

        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  ngOnInit() {}
}
