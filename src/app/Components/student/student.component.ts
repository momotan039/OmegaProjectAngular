import { GroupService } from './../../Services/Group/Group.service';
import { GradeService } from './../../Services/Grade/Grade.service';
import { UserService } from './../../Services/User/Users.service';
import { StudentService } from './../../Services/Student/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService,
    private userService:UserService,
    private gradeService:GradeService,
    private groupService:GroupService) { }

   students?:Array<Student>=[];
  ngOnInit(): void {
    this.userService.Users.forEach(u=>{
      if(u.Rule===3)
              this.students?.push({UserId:"3"});
    });
    //add grade
    this.gradeService.grades?.forEach(g=>{
       this.students?.find(s=>s.UserId==g.UserID)?.Grade!=g.Grade;
    })
    //add GroupId
    this.groupService.Groups?.forEach(g=>{
      this.students?.find(s=>s.UserId==g.UserID)?.Grade!=g.Grade;
   })
  }
}
