import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {

id:number;

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.deleteEmployee();
  }

  deleteEmployee(){
    this.http.delete('http://localhost:4000/deleteemployee/'+this.id).subscribe(result=>{
console.log(result);      
    });
    
    console.log("deleted");
  }

}
