import { HttpService } from './../../../Services/httpService/http.service';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msg=new Message();
  constructor(private HttpService:HttpService,private userService:UserService) { }
  friends:Array<User>=[]
   ngOnInit() {
     this.msg.senderId=this.userService.currentUser?.id
    debugger
    if(this.userService.currentUser?.role!=1)
     this.HttpService.GetFreindsByUser(this.userService.currentUser?.id!).then(data=>{
      this.friends=(data as User[])
    })
    else
     this.HttpService.GetUsers().then(data=>{
      this.friends=(data as User[])
    })
  }
  selectFreind(elemnt:any){
    this.msg.reciverId=Number(elemnt.value)
    alert(this.msg.reciverId)
  }
  SendMessage(){
    if(this.msg.contents=="")
    {
      alert("לא מותר לשלוח הודעה ריקה !!")
      return;
    }
    if(this.msg.reciverId==undefined)
    {
      alert("נא לבחור חבר כדי למהשיך !!")
      return;
    }
    if(this.msg.title=="")
    {
      alert("לא מותר לשלוח הודעה ללא כותרת !!")
      return;
    }

    this.HttpService.PostMessage(this.msg).then(e=>{
      alert("Sended Message")
    })
  }
  textAreaChange(elemnt:any){
    this.msg.contents=elemnt.value
  }
  ChangeTitle(elemnt:any){
    this.msg.title=elemnt.value.trim()
  }
}
