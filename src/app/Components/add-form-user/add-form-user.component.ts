import { User } from './../../Models/User';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form-user',
  templateUrl: './add-form-user.component.html',
  styleUrls: ['./add-form-user.component.css']
})
export class AddFormUserComponent implements OnInit {
  constructor(public userService:UserService) { }
   _editUser=new User();
  ngOnInit(): void {

    if(this.method=="add")
    this.user=this.userService.user;

    else
    this._editUser=this.userService.editUser;


  }
  @Input() user1=new User();
  @Input() user2=new User();
  @Input() user=new User();

  @Input() method:string=""

  operation(){
    console.warn(this._editUser)
    console.warn(this.userService.editUser)
   if(this.method=="add")
    this.userService.addUser()
    else
      this.userService.EditUser()

  }
}
