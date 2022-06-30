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
  constructor(private userService:UserService,private httpService:HttpService) { }

  ngOnInit(): void {
    let userId=1103
       this.httpService.GetGroupsByUserId(userId).then(d=>{
         this.groups=d as Group[]
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

    let file=<File>Files[0];
    this.homeWork.filesPath=new FormData()
    //this.homeWork.filesPath?.append("file",file,file.name)

    this.httpService.SendHomeWork(this.homeWork).then(d=>{
      alert("sended")
    })

    // if(!this.IsValidateInputs(idGroup,Title,Contents))
    // return

    // this.homeWork.groupID=idGroup
    // this.homeWork.title=Title
    // this.homeWork.contents=Contents
    // this.homeWork.filesPath=Files
    // this.homeWork.sendingDate=new Date()
    // this.httpService.SendHomeWork(this.homeWork)
  }
}
