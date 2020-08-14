import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  added:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  }

  postEmployee(form : NgForm){
   //post employee request
   this.http.post('http://localhost:4000/addemployee',form.value).subscribe((response:Response)=>{
    console.log(response);
    console.log(response.headers);
   });
   this.added=true;
   form.reset();
  }

}
