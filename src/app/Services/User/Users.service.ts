import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?:User;
  Users:Array<User>=[
    //Student
    {FirstName:"Hitham",
    LastName:"Akram",
    Password:"123456",
    Rule:3,
    UserId:'123456789',
    UserName:"hitham"},

    {FirstName:"shiblyee",
    LastName:"tan",
    Password:"123456",
    Rule:3,
    UserId:'123456780',
    UserName:"shibly"},
    //teacher
    {FirstName:"hamza",
    LastName:"tan",
    Password:"123456",
    Rule:2,
    UserId:'123456780',
    UserName:"hamza"},
    //admiin
    {FirstName:"mohammed",
    LastName:"taha",
    Password:"123456",
    Rule:1,
    UserId:'2161651651',
    UserName:"momotan"},

  ]

   CheckExistUser(userName:string,passWord:string):Boolean{
     let found=false
  this.Users.forEach((user)=>{
        if(user.UserName===userName && user.Password===passWord)
            {
              this.currentUser=user
              found=true;
              return
            }
      })

      return found
  }
}
