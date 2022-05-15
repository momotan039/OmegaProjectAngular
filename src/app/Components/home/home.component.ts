import { UserService } from './../../Services/User/Users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _firstName?:string
  constructor(private userService:UserService) {
    this._firstName=this.userService.currentUser?.firstName;
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
  }

}
