import { UserService } from 'src/app/Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(
    public userService:UserService,
    ) {

     }
    students:Array<User>=[]
  ngOnInit(): void {
    this.userService.resetUser(this.userService.user);
    this.userService.resetUser(this.userService.editUser);

  this.userService.HttpService.GetUsers().then(f=>{
     let users=f as User[];

      users.forEach(u=>{
        if(u.role==3)
          this.students.push(u)
      })
  })


  }

}


