import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
id:number;

updated:boolean=false;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
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

 }
}
