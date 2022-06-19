import { HttpService } from 'src/app/Services/httpService/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MyTools } from 'src/app/Services/MyTools/MyTools';
import { User } from 'src/app/Models/User';
import { Group } from 'src/app/Models/Group';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:any
  groups:any
  constructor(private route:ActivatedRoute,private httpService:HttpService) { }

  ngOnInit(): void {
    //get current user
    let id=this.route.snapshot.paramMap.get("id")
this.httpService.GetUsers(Number(id)).then(data=>{
  this.user=data
})
    console.warn(this.user)
    //get all groups of user
    this.httpService.GetGroupsByUserId(Number(id)).then(data=>{
      this.groups= data as Group[]
    })
  }
  GetRoleString(user:User){
    return MyTools.GetRoleString(user)
  }
  CustomDate(date:Date){
    return  MyTools.CustomDate(date)
  }
}
