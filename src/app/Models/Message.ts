import { User } from "./User"

export class Message {
  id?:number
  groupID?:number
  reciverId?:number
  senderId?:number
  contents?:string
  title?:string
  isOpened=false
  sender?:User
}
