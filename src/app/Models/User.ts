import { Message } from 'src/app/Models/Message';
export class User{
  idCard?:string;
  firstName?:string;
  lastName?:string;
  phone?:string;
  role?:number;
  email?:string;
  password?:string;
  id?:number
  messages?:Message[]


}
