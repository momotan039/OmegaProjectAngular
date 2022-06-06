import { Component, Input, OnInit } from '@angular/core';
import { MainMenu } from 'src/app/Data/MainMenu';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/Users.service';

@Component({
  selector: 'app-header-without-menu',
  templateUrl: './header-without-menu.component.html',
  styleUrls: ['./header-without-menu.component.css']
})
export class HeaderWithoutMenuComponent implements OnInit {

  mainMenu:Array<MainMenu>=MainMenu.mainMenu
  constructor(private userSerivce:UserService) {
  }
   @Input() currentUser?:any;
  ngOnInit(): void {
    this.currentUser=this.userSerivce.currentUser
  }
  ExistedUser(){
    return this.currentUser!=null
  }

}
