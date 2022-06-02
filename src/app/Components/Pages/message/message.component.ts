import { HttpService } from './../../../Services/httpService/http.service';
import { UserService } from 'src/app/Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  currentUser?:User;
  constructor(private HttpService:HttpService) { }
friends:Array<User>=[]
  async ngOnInit(): Promise<void> {

    await this.HttpService.GetUsers().then(data=>{
      this.friends=(data as User[])
    })
  }
}
