import { UserService } from '../../Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { MainMenu } from 'src/app/Data/MainMenu';
import { HeaderComponent } from '../Layout/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _firstName?:string
  static firstTimeEnter=false
  constructor(private userService:UserService) {
   }
   GetRule(){
     let role=this.userService.currentUser?.role
     if(role==1)
     return "admin";
     else if(role==2)
     return "Teacher"

     return "Student"
   }
  ngOnInit(): void {
    this._firstName=this.userService.currentUser?.firstName;
  }

}
