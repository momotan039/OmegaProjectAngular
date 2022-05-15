import { Router } from '@angular/router';
import { HttpService } from './../../Services/http.service';
import { GroupService } from './../../Services/Group/Group.service';
import { GradeService } from './../../Services/Grade/Grade.service';
import { UserService } from './../../Services/User/Users.service';
import { StudentService } from './../../Services/Student/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { User } from 'src/app/Models/User';
import { group } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  user:User=new User();

  constructor(private studentService:StudentService,
    private userService:UserService,
    private gradeService:GradeService,
    private groupService:GroupService,
    private HttpService:HttpService,private router:Router) {
     }
    students:Array<User>=[]
  ngOnInit(): void {
    this.user.role=3;
    this.user.email=""
    this.user.firstName=""
    this.user.lastName=""
    this.user.idCard=""
    this.user.phone=""

  this.HttpService.GetUsers().then(f=>{
     let users=f as User[];

      users.forEach(u=>{
        if(u.role==3)
          this.students.push(u)
      })
  })


  }
  addStudent(){
      if(!this.IsFilledProperties(this.user))
        {
          alert("נא להזין את כל פרטי הסטודנט")
          return;
        }
    //check if this student not exitst in database
    this.HttpService.GetUsers().then(us=>{
      (us as User[]).forEach(u=>{

        if(u.idCard==this.user.idCard)
          {
            alert("הסטודנט הזה קיים עם מספר תעודה הזהות הזו !!")
            return;
          }
      })
    })

    //Add Studnet to DataBase
   this.HttpService.PostUser(this.user).then(e=>{
     alert("הפעולה פוצעה בהצלחה")
    let currentUrl = this.router.url;
    window.location.replace(currentUrl);
   });
  }

  deleteStudent(id:string){
    let res=window.confirm("Do you want to complete")
    if(!res)
      return;
    this.HttpService.DeleteUser(id).then(f=>{
      alert("הפעולה פוצעה בהצלחה")
    let currentUrl = this.router.url;
    window.location.replace(currentUrl);
    })
  }

  EditStudent(user:User){
    let res=window.confirm("Do you want to complete")
    if(!res)
      return;
    this.HttpService.EditingUser(user).then(f=>{
      alert("הפעולה פוצעה בהצלחה")
    let currentUrl = this.router.url;
    window.location.replace(currentUrl);
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


