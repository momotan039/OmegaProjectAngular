import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?:User;
  static AllUsers:Array<User>=[
  ]

   CheckExistUser(userName:string,passWord:string):Boolean{
     let found=false
     UserService.AllUsers.forEach((user)=>{
        if(user.email===userName && user.password===passWord)
            {
              this.currentUser=user
              found=true;
              return
            }
      })

      return found
  }
}
