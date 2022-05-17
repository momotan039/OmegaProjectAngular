import { User } from '../../../Models/User';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-form-user',
  templateUrl: './add-form-user.component.html',
  styleUrls: ['./add-form-user.component.css']
})
export class AddFormUserComponent implements OnInit {
  constructor(public userService:UserService) { }
  @Input() users:Array<User>=[]
  @Input() role=0
  ngOnInit(): void {

    if(this.method=="add")
    this.user=this.userService.user;
  }

   @Input() user=new User();


  @Input() method:string=""

  operation(){

   if(this.method=="add")
    this.userService.addUser(this.role);
    else
      this.userService.EditUser(this.user,this.role)
  }

}
