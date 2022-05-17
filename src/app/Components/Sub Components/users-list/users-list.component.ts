import { UserService } from 'src/app/Services/User/Users.service';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(public userService:UserService) {
   }
   @Input() role=0
   @Output() editUser=new EventEmitter<User>()
  ngOnInit(): void {
    this.userService.HttpService.GetUsersByRole(this.role).then(d=>{
    this.userService.users=d as User[];
  }
    )
  }

  OnDeleteUser(u:User){
     this.userService.deleteUser(u.idCard!).then(f=>{
      this.userService.HttpService.GetUsersByRole(this.role).then(d=>{
        this.userService.users=d as User[];
      }
        )
     })
  }

  OnEditUser(u:User){
    this.editUser.emit(u);
  }

}
