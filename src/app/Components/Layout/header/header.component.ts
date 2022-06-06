import { UserService } from '../../../Services/User/Users.service';
import { Component, Input, OnInit } from '@angular/core';
import { MainMenu } from 'src/app/Data/MainMenu';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

mainMenu:Array<MainMenu>=MainMenu.mainMenu
  currentUser: User | undefined;
  @Input() singedIn=false;
  constructor(private userSerivce:UserService) {
  }
  ngOnInit(): void {
    debugger
    this.currentUser=this.userSerivce.currentUser
  }
}
