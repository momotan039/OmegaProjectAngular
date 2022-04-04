import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   currentStudent?:Student
   Students:Array<Student>=[
     {
         UserId:"51981891",
         GroupId:152,
         Grade:480
     },

     {
      UserId:"261951981",
      GroupId:152,
      Grade:698
    },

    {
     UserId:"198984556",
     GroupId:152,
     Grade:465
   }
   ,

   {
    UserId:"561891651",
    GroupId:152,
    Grade:659
  },

  {
   UserId:"3155648465",
   GroupId:152,
   Grade:699
 }
   ]
  constructor() { }

}
