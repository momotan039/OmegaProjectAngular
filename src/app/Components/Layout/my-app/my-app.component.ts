import { LogInComponent } from './../../Pages/log-in/log-in.component';
import { TeacherComponent } from './../../Pages/teacher/teacher.component';
import { StudentComponent } from './../../Pages/student/student.component';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';
import { MainMenu } from 'src/app/Data/MainMenu';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
  constructor( private router:Router,private userService:UserService) { }
  currentUser?:any;
  singedIn=false;
  ngOnInit(): void {

    // if(this.currentUser==undefined)
    // this.router.navigate(['/'])

  }
  deactiveComponent(component:Component){
    if(component instanceof LogInComponent)
      this.currentUser=this.userService.currentUser;
  }

  activeComponent(component:Component){
    debugger
    if(component instanceof HomeComponent && !HomeComponent.firstTimeEnter){
      MainMenu.mainMenu.forEach(m=>{
        if(this.userService.currentUser?.role!<=m.minAccessRole)
            HeaderComponent.mainMenu.push(m)
      })
      HomeComponent.firstTimeEnter=true
    }
  }
}
