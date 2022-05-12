import { HttpService } from './../../Services/http.service';
import { GroupService } from './../../Services/Group/Group.service';
import { GradeService } from './../../Services/Grade/Grade.service';
import { UserService } from './../../Services/User/Users.service';
import { StudentService } from './../../Services/Student/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { User } from 'src/app/Models/User';
import { group } from '@angular/animations';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService,
    private userService:UserService,
    private gradeService:GradeService,
    private groupService:GroupService,
    private HttpService:HttpService) {
     }
    users?:Array<User>
   students?:Array<Student>=[];
  ngOnInit(): void {
  //   this.userService.Users.forEach(u=>{
  //     if(u.Rol===3)
  //             this.students?.push({UserId:"3"});
  //   });
  //   this.users=this.userService.Users
  //   //add grade
  //   this.gradeService.grades?.forEach(g=>{
  //      this.students?.find(s=>s.UserId==g.UserID)?.Grade!=g.Grade;
  //   })
  //   //add GroupId
  // //   this.groupService.Groups?.forEach(g=>{
  // //     this.students?.find(s=>s.UserId==g.UserID)?.Grade!=g.Grade;
  // //  })
  this.HttpService.GetUsers().then(f=>{
     this.users=f as User[]
  })

  }
}
