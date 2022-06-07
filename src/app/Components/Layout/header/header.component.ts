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

static mainMenu:Array<MainMenu>=[]
_mainMenu:MainMenu[]=[]
  @Input() currentUser: User | undefined;
  // @Input() singedIn=false;
  constructor(private userSerivce:UserService) {
    this._mainMenu=HeaderComponent.mainMenu
  }
  ngOnInit(): void {
  }
}
