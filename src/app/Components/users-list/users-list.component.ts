import { UserService } from 'src/app/Services/User/Users.service';
import { HttpService } from './../../Services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(public userService:UserService) {
   }
  students:Array<User>=[]
  ngOnInit(): void {
    this.userService.HttpService.GetUsers().then(d=>{
    this.students=d as User[];
    })
  }

}
