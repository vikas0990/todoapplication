import { PipeTransform, Pipe, Injectable } from '@angular/core';
import {Employee} from '../model/Employee.model'
import { formatDate } from '@angular/common';
@Pipe({
    name:'employeeFilter',
    pure:false
})


export class EmployeeFilterPipe implements PipeTransform{

transform(employeeList :Employee[],from:Date,to:Date): Employee[]{
   
    if (!employeeList || !from) {
        return employeeList;
      }
      return employeeList.filter(emp=>{
          console.log("date_of_resign : "+typeof emp.date_of_resign,emp.date_of_resign.toString().split('T')[0]);
          console.log("doj : "+typeof emp.doj,emp.doj.toString().split('T')[0]);
          console.log("from :"+typeof from,from);
          console.log("to :"+typeof to,to);

          var dateOfResign=new Date(emp.date_of_resign.toString().split('T')[0]);
          var dojEmp=new Date(emp.doj.toString().split('T')[0]);
          var fromDate=new Date(from);
          var toDate=new Date(to);


          if(dojEmp<=toDate && dojEmp>=fromDate){
              return emp;
          }
          
    });
 }

}