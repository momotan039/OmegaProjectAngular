import { MessageGroup } from './../../../Models/MessageGroup';
import { HttpService } from './../../../Services/httpService/http.service';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Message } from 'src/app/Models/Message';
import { interval } from 'rxjs';
import { Group } from 'src/app/Models/Group';
import { MyTools } from 'src/app/Services/MyTools/MyTools';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msg=new Message();
  sentMsgs:Message[]=[]
  recivedMsgs:Message[]=[]
  currentUser:any
  constructor(private HttpService:HttpService,private userService:UserService) { }
  friends:Array<User>=[]
  groups:Array<Group>=[]
   ngOnInit() {
    //get current User
    this.currentUser=this.userService.currentUser
//get reveved messages after every 1 minute
    interval(1000*60)
    .subscribe(d=>{
      this.HttpService.GetMessagesByReciver(this.currentUser.id).then(data=>{
        this.recivedMsgs=(data as Message[])
      })
    })
    //set sender Id
     this.msg.senderId=this.currentUser.id

    this.HttpService.GetMessagesBySender(this.currentUser.id!).then(data=>{
      this.sentMsgs=(data as Message[])
      console.log(this.sentMsgs)
    })
    this.HttpService.GetMessagesByReciver(this.currentUser.id!).then(data=>{
      this.recivedMsgs=(data as Message[])
    })
    //get friends
    if(this.currentUser.role!=1)
     this.HttpService.GetFreindsByUser(this.currentUser.id!).then(data=>{
      this.friends=(data as User[])
    })
    else
     this.HttpService.GetGroups().then(data=>{
      this.groups=(data as Group[])
    })
  }
  SelectReciver(elemnt:any){
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
    //send to reciver user
    if(this.currentUser.role!=1)
    this.HttpService.PostMessage(this.msg).then(e=>{
      alert("Sended Message")
      this.HttpService.GetMessagesBySender(this.currentUser.id!).then(data=>{
        this.sentMsgs=(data as Message[])
      })
    })
 //send to reciver Group to share to  users
    else{
      let msgGroup=new MessageGroup();
      msgGroup.contents=this.msg.contents
      msgGroup.title=this.msg.title
      msgGroup.GroupId=this.msg.reciverId
      msgGroup.senderId=this.msg.senderId
      debugger
      this.HttpService.PostMessageByGroup(msgGroup).then(e=>{
        alert("Sended Message")
        this.HttpService.GetMessagesBySender(this.currentUser.id!).then(data=>{
          this.sentMsgs=(data as Message[])
        })
      })
    }
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


  CustomDate(date:Date){
    return  MyTools.CustomDate(date)
  }
}
