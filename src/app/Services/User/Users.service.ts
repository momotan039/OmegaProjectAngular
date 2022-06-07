import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Array<User>=[]
   user=new User();
     currentUser?:User;
  static AllUsers:Array<User>=[
  ]
  constructor(public HttpService:HttpService,
    private router:Router){
  }



  resetUser(user:User,role:number){
    user.role=role;
    user.email=""
    user.firstName=""
    user.lastName=""
    user.idCard=""
    user.phone=""
  }
   addUser(role:number){
      if(!this.IsFilledProperties(this.user))
        {
          alert("נא להזין את כל פרטי הסטודנט")
          return;
        }

    //check if this User not exitst in database
     this.HttpService.GetUsers().then(us=>{

      let temp=(us as User[]).find(u=>u.idCard==this.user.idCard)
      if(temp!=undefined)
      {
        alert("כבר קיים במערכת משתמש עם מספר תעודת הזהות הזו")
        return;
      }
      //Add Studnet to DataBase
      this.HttpService.PostUser(this.user).then(e=>{
        alert("הפעולה פוצעה בהצלחה")
        this.HttpService.GetUsersByRole(role).then(d=>{
          this.users= d as User[]
        })
       })
       this.resetUser(this.user,role);
    })
      }



  async deleteUser(id:string){
    let res=window.confirm("האם ברצונך להמשיך ?")
    if(!res)
      return;
    await this.HttpService.DeleteUser(id).then(f=>{
      alert("הפעולה פוצעה בהצלחה")
    })
  }



  EditUser(user:User,role:number){
    console.log(user)
    if(!this.IsFilledProperties(user)){
      alert("נא לבחור אחד מהמשתמשים כדי להמשיך")
      return;
    }
    let res=window.confirm("האם ברצונך להמשיך ?")
    if(!res)
      return;
    this.HttpService.EditingUser(user).then(f=>{
      alert("הפעולה פוצעה בהצלחה")
      this.HttpService.GetUsersByRole(role).then(d=>{
        this.users= d as User[]
      })
    })
  }

   IsFilledProperties(user:User) {
    if(user.email=="" || user.firstName=="" || user.idCard=="",
    user.lastName=="" || user.password==""|| user.phone==""
    )
    return false;

    return true;
}

}
