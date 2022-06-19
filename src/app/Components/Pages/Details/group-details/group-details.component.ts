import { MyTools } from './../../../../Services/MyTools/MyTools';
import { HttpService } from './../../../../Services/httpService/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/Group';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpService:HttpService) { }
  currentGroup:any
  users:any

  ngOnInit(): void {

    //get current group
    let id=this.route.snapshot.paramMap.get("id")
    this.httpService.GetGroups().then(data=>{
      this.currentGroup= (data as Group[]).find(f=>f.id==Number(id))
      console.warn(this.currentGroup)
    })
    //get users in this group
    this.httpService.GetUsersByGroupId(Number(id))
    .then(data=>{
      this.users=(data as User[])
    })
  }
  GetRoleString(user:User){
    return MyTools.GetRoleString(user)
  }

  CustomDate(date:Date){
    return  MyTools.CustomDate(date)
  }
}
