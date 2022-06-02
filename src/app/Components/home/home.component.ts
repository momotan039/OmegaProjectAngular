import { UserService } from '../../Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _firstName?:string
  constructor(private userService:UserService) {
   }
   GetRule(){
     debugger
     let role=User.currentUser?.role
     if(role==1)
     return "admin";
     else if(role==2)
     return "Teacher"

     return "Student"
   }
  ngOnInit(): void {
    this._firstName=User.currentUser?.firstName;
  }

}
