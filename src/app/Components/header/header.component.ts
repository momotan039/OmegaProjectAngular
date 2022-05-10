import { UserService } from './../../Services/User/Users.service';
import { Component, OnInit } from '@angular/core';
import { MainMenu } from 'src/app/Data/MainMenu';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

mainMenu:Array<MainMenu>=MainMenu.mainMenu
  constructor(private userSerivce:UserService) {
  }
  user?:User;
  ngOnInit(): void {
    this.user=this.userSerivce.currentUser

  }
  ExistedUser(){
    return this.user!=null
  }
}
