import { UserService } from 'src/app/Services/User/Users.service';
import { Group } from 'src/app/Models/Group';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  constructor(private httpService:HttpService,private userService:UserService) { }
  groups:Group[]=[]
  ngOnInit(): void {
    this.httpService.GetGroupsByUserId(this.userService.currentUser?.id!).then(data=>{
      this.groups=data as Group[]
    })
  }


}
