import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './listemployee/employee/employee.component';
import { EmployeeFilterPipe } from './listemployee/filter-employee.pipe';

const appRoute:Routes=[
  {  path:'' , component:HomeComponent},
  
  {  path:'employeelist' , component:ListemployeeComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {  path:'addemployee' , component:AddemployeeComponent},
  {  path:'updateemployee/:id' , component:UpdateemployeeComponent},
  {  path:'deleteemployee/:id' , component:DeleteemployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    DeleteemployeeComponent,
    UpdateemployeeComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
