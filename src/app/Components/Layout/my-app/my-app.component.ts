import { LogInComponent } from './../../Pages/log-in/log-in.component';
import { TeacherComponent } from './../../Pages/teacher/teacher.component';
import { StudentComponent } from './../../Pages/student/student.component';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  constructor(private userService:UserService) { }

  currentUser?:any;
  singedIn=false;
  ngOnInit(): void {
    debugger
    this.currentUser=this.userService.currentUser;
  }
  changeComponent(component:Component){
    debugger
    if(component instanceof LogInComponent){
      this.singedIn=LogInComponent.signedIn
    }
  }
}
