import { async } from '@angular/core/testing';
import { HomeWork } from './../../Models/HomeWork';
import { UserGroup } from './../../Models/UsersGroups';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { Group } from 'src/app/Models/Group';
import { Message } from 'src/app/Models/Message';
import {  MessageGroup } from 'src/app/Models/MessageGroup';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 httpErorrResponse:any
  constructor(private http:HttpClient) {

  }

  async GetUsers(id:number=-1){
    if(id==-1)
    return await this.http.get("https://localhost:44327/api/Users/GetUsers/").toPromise();

    return await this.http.get("https://localhost:44327/api/Users/GetUsers/"+id).toPromise();
  }
  async GetUsersByRole(role:number){
    return await this.http.get("https://localhost:44327/api/Users/GetUsersByRole/"+role).toPromise();
  }
  async GetUsersByGroupId(id:number){
    return await this.http.get("  https://localhost:44327/api/Users/GetUsersByGroupId/"+id).toPromise();
  }
  async GetFreindsByUser(Id:number){
    return await this.http.get("https://localhost:44327/api/Users/GetFreindsByUser/"+Id).toPromise();
  }
  async GetUsersNotInThisGroup(GroupId:number){
    return await this.http.get("https://localhost:44327/api/Users/GetUsersNotInThisGroup/"+GroupId).toPromise();
  }
  async PostUser(user:User){
    //return await this.http.post("https://localhost:44327/api/Users/PostUser",user).toPromise();
     await this.http.post("https://localhost:44327/api/Users/PostUser",user).subscribe((data)=>{
    },error=>{
      console.log(error)
    }
    );
  }

  async DeleteUser(id:String){
    return await this.http.delete("https://localhost:44327/api/Users/DeleteUser/"+id).subscribe((res)=>{

    },error=>{
      console.log(error)
    });
}
async EditingUser(user:User){
  return await this.http.put("https://localhost:44327/api/Users/EditUser",user).subscribe((res)=>{
  },error=>{
    console.warn(error)
  });
}

async  GetCourses(id=-1):Promise<Course|any>{
  if(id!=-1)
  return await this.http.get("https://localhost:44327/api/Courses/GetCourses/"+id).toPromise();
  return await this.http.get("https://localhost:44327/api/Courses/GetCourses/").toPromise();
}
async  GetCoursesByUserId(id:number){
  return await this.http.get("https://localhost:44327/api/Courses/GetCoursesByUserId/"+id).toPromise();
}

async PostCourse(course:Course){
   await this.http.post("https://localhost:44327/api/Courses/PostCourse",course).subscribe((data)=>{
  },error=>{
    console.log(error)
  }
  );
}
async DeleteCourse(id:number){
  return await this.http.delete("https://localhost:44327/api/Courses/DeleteCourse/"+id).subscribe((res)=>{

  },error=>{
    console.log(error)
  });
}

async EditingCourse(course:Course){
  return await this.http.put("https://localhost:44327/api/Courses/EditCourse",course).subscribe((res)=>{
  },error=>{
    console.warn((error as HttpErrorResponse).error )
  });
}


async  GetGroups(){
  return await this.http.get("https://localhost:44327/api/Groups/GetGroups").toPromise();
}
async  GetGroupsByUserId(id:number){
  return await this.http.get("https://localhost:44327/api/Groups/GetGroupsByUserId/"+id).toPromise();
}

async  GetUsersGroups(groupId:number){
  return await this.http.get("https://localhost:44327/api/UsersGroups/GetUserGroups/"+groupId).toPromise();
}
async PostGroups(group:Group){
   await this.http.post("https://localhost:44327/api/Groups/PostGroup",group).subscribe((data)=>{
  },error=>{
    console.warn(error)
  }
  );
}
async DeleteGroups(id:number){
  return await this.http.delete("https://localhost:44327/api/Groups/DeleteGroup/"+id).subscribe((res)=>{
  },httpError=>{
    console.log(httpError.error.text)
  });
}

async EditingGroups(group:Group){
  return await this.http.put("https://localhost:44327/api/Groups/EditGroup",group).subscribe((res)=>{
  },error=>{
    console.warn((error as HttpErrorResponse).error )
  });
}

async DeleteUserFromGroup(id:number){
  return await this.http.delete("https://localhost:44327/api/UsersGroups/DeleteUserFromGroup/"+id).subscribe((res)=>{
  },error=>{
    console.log(error)
  });
}

async AddUserToGroup(ug:UserGroup){
  return await this.http.post("https://localhost:44327/api/UsersGroups/AddUserToGroup",ug).subscribe((res)=>{
  },error=>{
    console.log(error)
  });
}

async PostMessage(msg:Message){
  await this.http.post("https://localhost:44327/api/Messages/SendMessage",msg).subscribe((data)=>{
 },error=>{
   console.warn(error)
 }
 );
}

async PostMessageByGroup(msg:MessageGroup){
  await this.http.post("https://localhost:44327/api/Messages/SendMessageByGroup",msg).subscribe((data)=>{
 },error=>{
   console.warn(error)
 }
 );
}

async  GetMessagesBySender(idUser:number){
  return await this.http.get("https://localhost:44327/api/Messages/GetMessagesBySender/"+idUser).toPromise();
}

async  GetMessagesByReciver(idUser:number){
  return await this.http.get("https://localhost:44327/api/Messages/GetMessagesByReciver/"+idUser).toPromise();
}


async ChangeStatusMessage(msg:Message){
  await this.http.put("https://localhost:44327/api/Messages/ChangeStatusMessage",msg).subscribe((data)=>{
 },error=>{
   console.warn(error)
 }
 );
}

async SendHomeWork(homeWork:FormData){
  await this.http.post("https://localhost:44327/api/HomeWork/SendHomeWork",homeWork,{withCredentials:false}).subscribe((data)=>{
 },error=>{
   console.warn(error)
 }
 );

}
async GetHomeWorks(id=-1){
  if(id==-1)
  return await this.http.get("https://localhost:44327/api/HomeWork/GetHomeWork").toPromise();
  return await this.http.get("https://localhost:44327/api/HomeWork/GetHomeWork/"+id).toPromise();
}

}
