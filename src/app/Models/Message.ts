import { User } from "./User"

export class Message {
  id?:number
  reciverId?:number
  senderId?:number
  contents?:string
  title?:string
  isOpened=false
  sender?:User
  reciver?:User
  sendingDate?:Date
  groupId?:number
}
