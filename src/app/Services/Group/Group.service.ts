import { Group } from './../../Models/Group';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

constructor() { }
Groups:Array<Group>=[
  {
    GroupID:152,
    GroupContext:"פסיכומיטרי",
    GroupName:"group1"
  }
]
}
