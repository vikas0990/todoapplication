import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

id: number;
employeeList=[];
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.viewOneEmployee();
}  



  viewOneEmployee(){
    console.log(this.id);
     this.http.get("http://localhost:4000/employeelist/"+this.id).subscribe(employeeRes=>{
      for(let employee in employeeRes){
        this.employeeList.push(employeeRes);
     }
     });
  }

}
