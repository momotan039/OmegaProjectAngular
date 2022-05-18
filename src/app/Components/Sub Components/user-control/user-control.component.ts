import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/Users.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  constructor(
    public userService:UserService,
    ) {

     }
     @Input() role=0;
     @Input() Title="";
  ngOnInit(): void {
    //Initialize main objects
    this.userService.resetUser(this.userService.user,this.role);
    this.userService.resetUser(this.editUser,this.role);
  }
  editUser=new User()
  PassUser(user:User){
    this.editUser=user
  }

}
