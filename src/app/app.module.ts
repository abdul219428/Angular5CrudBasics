import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list',pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule,
  RouterModule.forRoot(appRoutes), FormsModule, BrowserAnimationsModule, BsDatepickerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
