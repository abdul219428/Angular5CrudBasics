import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

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
  datePickerConfig: Partial<BsDatepickerConfig>;
  saveEmployee(empForm: NgForm) {
    console.log(empForm.value);
  }
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2019, 0, 1),
        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  ngOnInit() {}
}
