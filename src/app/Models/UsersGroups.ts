import { Group } from 'src/app/Models/Group';
import { User } from 'src/app/Models/User';
export class UserGroup {
  id!:number;
  userId!:number;
  groupId!:number;
  user!:User;
  group!:Group;
}
