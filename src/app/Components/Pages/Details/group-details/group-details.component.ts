import { MyTools } from './../../../../Services/MyTools/MyTools';
import { HttpService } from './../../../../Services/httpService/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/Group';
import { User } from 'src/app/Models/User';
import { UserGroup } from 'src/app/Models/UsersGroups';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpService:HttpService) { }
  currentGroup:any;
  usersGroups:any
  members:User[]=[]
  relationUserGroup=new UserGroup()
  ngOnInit(): void {
    // initalize userId of objet
    this.relationUserGroup.userId=-1

    console.log(this.relationUserGroup)
    //get current group id
    let groupId=Number(this.route.snapshot.paramMap.get("id"))

    this.httpService.GetGroups().then(  async data=>{
      // console.warn(data as Group[])
        this.currentGroup=(data as Group[]).find(f=>f.id==groupId)
    })

    //get relation users in this group
    this.httpService.GetUsersGroups(groupId)
    .then(data=>{
      this.usersGroups=(data as UserGroup)
      console.log("here usersGroups before delete")
      console.log(this.usersGroups)
    })


    //get a nother members
    this.httpService.GetUsersNotInThisGroup(groupId).then(d=>{
      this.members=d as User[]
    })
  }
  GetRoleString(user:User){
    return MyTools.GetRoleString(user)
  }

  CustomDate(date:Date){
    return  MyTools.CustomDate(date)
  }
  CountStudent(){
    let ugs= this.usersGroups as UserGroup[]
    return ugs.filter(ug=>ug.user.role==3).length;
  }

  CountTeacher(){
    let ugs= this.usersGroups as UserGroup[]
    return ugs.filter(ug=>ug.user.role==2).length;
  }


     DeleteUserFromGroup(userGroupId:number){
    //  let res=confirm("Do you to delete!!")
    //  let finishDeleting=false;
    //  if(!res)
    //  return
    let res = window.confirm('האם ברצונך להמשיך ?');
    if (!res) return;

    this.httpService.DeleteUserFromGroup(userGroupId).then((e) => {
    alert('הפעולה פוצעה בהצלחה');
    this.httpService.GetUsersGroups(this.currentGroup.id).then(d=>{
      this.usersGroups=(d as UserGroup)
    })
    //get a nother members
    this.httpService.GetUsersNotInThisGroup(this.currentGroup.id).then(d=>{
      this.members=d as User[]
    })
    });
    }

    ChangeOptionSelect(elm:any){
      this.relationUserGroup.userId=Number(elm.value)
    }

    AddMemberToGroup(selectElm:HTMLElement){
      if(this.relationUserGroup.userId==-1)
      {
        alert("נא לבחור חבר להוספה")
        return
      }
       this.relationUserGroup.groupId=this.currentGroup.id
      this.httpService.AddUserToGroup(this.relationUserGroup).then(d=>{
        alert('הפעולה פוצעה בהצלחה');
    this.httpService.GetUsersGroups(this.currentGroup.id).then(d=>{
      this.usersGroups=(d as UserGroup)
    })
    //get a nother members
    this.httpService.GetUsersNotInThisGroup(this.currentGroup.id).then(d=>{
      this.members=d as User[]
    })
      })

      this.relationUserGroup.userId=-1
    }
}
