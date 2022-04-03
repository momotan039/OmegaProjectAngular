import { UserService } from './../../Services/User/Users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName?:string
  constructor(private userService:UserService) {
    this.firstName=this.userService.currentUser?.FirstName;
   }

  ngOnInit(): void {
  }

}
