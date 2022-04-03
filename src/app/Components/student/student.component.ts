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
    private userService:UserService) { }
   students?:Array<Student>;
   users?:Array<User>=[]
   last?:User
  ngOnInit(): void {
    this.userService.Users.forEach(u=>{
      if(u.Rule===3)
        {
          this.users?.push(u);
          this.last=u
        }
    })
  }

}
