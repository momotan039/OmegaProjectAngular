import { HttpService } from './../../../Services/httpService/http.service';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Message } from 'src/app/Models/Message';
import { flatMap, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msg=new Message();
  sentMsgs:Message[]=[]
  recivedMsgs:Message[]=[]
  constructor(private HttpService:HttpService,private userService:UserService) { }
  friends:Array<User>=[]
   ngOnInit() {
    interval(1000*60)//get reveved messages after every 1 second
    .subscribe(d=>{
      this.HttpService.GetMessagesByReciver(this.userService.currentUser?.id!).then(data=>{
        this.recivedMsgs=(data as Message[])
      })
    })

     this.msg.senderId=this.userService.currentUser?.id
     //get all messages that sended
    //  this.userService.currentUser?.messages?.forEach(msg=>{
    //   if(msg.senderId==this.userService.currentUser?.id)
    //     this.sentMsgs.push(msg);
    //   else if(msg.reciverId==this.userService.currentUser?.id)
    //     this.recivedMsgs.push(msg);
    // })
    this.HttpService.GetMessagesBySender(this.userService.currentUser?.id!).then(data=>{
      this.sentMsgs=(data as Message[])
    })
    this.HttpService.GetMessagesByReciver(this.userService.currentUser?.id!).then(data=>{
      this.recivedMsgs=(data as Message[])
    })
    //get friends
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
      this.HttpService.GetMessagesBySender(this.userService.currentUser?.id!).then(data=>{
        this.sentMsgs=(data as Message[])
      })
    })
  }
  textAreaChange(elemnt:any){
    this.msg.contents=elemnt.value
  }
  ChangeTitle(elemnt:any){
    this.msg.title=elemnt.value.trim()
  }
  async showMessage(btnHide:HTMLElement,msg:HTMLElement,content:HTMLElement,btn:HTMLElement,msgEntity:Message ){
    //hide buttonShow
    btn.style.display="none"
    //show buttonHide
    btnHide.style.display="unset"
    //show full message content
    content.style.whiteSpace="unset"
    //change background of messsage
    msg.classList.remove("active")
    //change property of message from server
    if(msgEntity.isOpened)
    return;

     this.HttpService.ChangeStatusMessage(msgEntity);
  }
  HideMessage(btnHide:HTMLElement,content:HTMLElement,btn:HTMLElement){
    btn.style.display="unset"
    content.style.whiteSpace="nowrap"
    btnHide.style.display="none"
  }

  async GetUserById(id:number){
    return await this.HttpService.GetUsers(id) as User
  }
  async GetEmailUserById(id:number){
    let u=  this.HttpService.GetUsers(id) as User
    return "saf"
  }
}
