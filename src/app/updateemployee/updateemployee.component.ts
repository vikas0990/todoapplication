import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Employee } from '../model/Employee.model';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
id:number;
// @Input() queryParams:any;

employeeName: string;
employeeEmailAddress: string;
employeeDOJ: Date;
employeeDateOfResign: Date;




updated:boolean=false;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
this.route.queryParams.subscribe(data=>{
  console.log(data);
  this.employeeName=data.employeeName;
  this.employeeEmailAddress=data.employeeEmailAddress;
  this.employeeDOJ=data.employeeDOJ;
  this.employeeDateOfResign=data.employeeDateOfResign;
});
  }

  updateEmployee(f:NgForm){
  const updateData={
    "ename":f.value.ename,
    "email":f.value.email,
    "doj":f.value.doj,
    "dateOfResign":f.value.dateOfResign
    }

  this.http.put('http://localhost:4000/updateemployee/'+this.id,updateData).subscribe(result=>{
    console.log(result);
    
    this.updated=true;
  })

  // f.reset();
 }
}
