import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   currentStudent?:Student
   Students:Array<Student>=[
     {
         UserId:"123456789",
         GroupId:152,
         Grade:568
     },

     {
      UserId:"123456789",
      GroupId:152,
      Grade:568
  }
   ]
  constructor() { }

}
