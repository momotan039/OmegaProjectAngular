import { User } from "src/app/Models/User";

export class MyTools {
  public static CustomDate(date:Date){
    return new Date(Date.parse(date+"")).toLocaleDateString()
  }
  public static GetRoleString(user:User){
    let role=user.role
    if(role==1)
    return "admin";
    else if(role==2)
    return "Teacher"

    return "Student"
  }
}
