import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

employeesList=[];
// employeesList[];
title="";
to:any;
from:any;

constructor(private http:HttpClient,private route:ActivatedRoute,private titleService:Title) { }

  ngOnInit(): void {
    this.listAllEmployee();
  // console.log(this.from,this.to);
  }
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }


// private filterEmployee(form : NgForm){
// console.log(form.value);
// this.http.get('http://localhost:4000/employeelist/filter?startdate='+form.value.startdate+'&enddate='+form.value.enddate).subscribe(employees=>{
//       for(let employee in employees){
//          this.employeesList.push(employees);
//       }

//       console.log(this.employeesList[0]);
//     });

// }



  
 private  listAllEmployee(){
    this.http.get('http://localhost:4000/employeelist').subscribe(employees=>{
      for(let employee in employees){
         this.employeesList.push(employees);
      }

       console.log(this.employeesList[0]);
    });
  }
}