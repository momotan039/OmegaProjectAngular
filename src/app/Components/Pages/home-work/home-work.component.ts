import { HomeWork } from './../../../Models/HomeWork';
import { UserService } from './../../../Services/User/Users.service';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { Group } from './../../../Models/Group';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {
groups:Array<Group>=[]
homeWork=new HomeWork()
homeWorks:HomeWork[]=[]
userID=-1
  constructor(private userService:UserService,private httpService:HttpService) { }

  ngOnInit(): void {
      this.userID=this.userService.currentUser?.id!
       this.httpService.GetGroupsByUserId(this.userID).then(d=>{
         this.groups=d as Group[]
       })

       this.httpService.GetHomeWorks().then(data=>{
         this.homeWorks=data as HomeWork[]
       })
  }


  IsValidateInputs(idGroup:any,Title:any,Contents:any){
    if(idGroup==0)
    {
      alert("Choose a group to send")
      return false
    }
    if(Title=="")
    {
      alert("Choose a Title to send")
      return false
    }
    if(idGroup==0)
    {
      alert("Choose a Content to send")
      return false
    }
    return true
  }

  AddHomeWork(idGroup:any,Files:any,Title:any,Contents:any){
   if(!this.IsValidateInputs(idGroup,Title,Contents))
    return
     let files=Files as File[]
     let fff=files[0]
    // this.homeWork.filesPath=new FormData()
    //this.homeWork.filesPath?.append("file",file,file.name)
    let fd=new FormData();
   fd.append("title",Title)
   fd.append("contents",Contents)
   fd.append("groupId",idGroup)
   debugger
   for(let i=0;i<files.length;i++)
    fd.append("files",files[i])
   fd.append("teacherId",this.userID+"")
    this.httpService.SendHomeWork(fd).then(d=>{
      alert("Success Message")
      this.httpService.GetHomeWorks().then(data=>{
        this.homeWorks=data as HomeWork[]
      })
    })
  }
}
