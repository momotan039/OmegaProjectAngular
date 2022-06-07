import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { Group } from 'src/app/Models/Group';
import { Message } from 'src/app/Models/Message';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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

  async GetFreindsByUser(Id:number){
    return await this.http.get("https://localhost:44327/api/Users/GetFreindsByUser/"+Id).toPromise();
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

async  GetCourses(id:number):Promise<Course|undefined|Array<Course>>{
  return await this.http.get("https://localhost:44327/api/Courses/GetCourses/"+id).toPromise();
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

async PostGroups(group:Group){
   await this.http.post("https://localhost:44327/api/Groups/PostGroup",group).subscribe((data)=>{
  },error=>{
    console.warn(error)
  }
  );
}
async DeleteGroups(id:number){
  return await this.http.delete("https://localhost:44327/api/Groups/DeleteGroup/"+id).subscribe((res)=>{

  },error=>{
    console.log(error)
  });
}

async EditingGroups(group:Group){
  return await this.http.put("https://localhost:44327/api/Groups/EditGroup",group).subscribe((res)=>{
  },error=>{
    console.warn((error as HttpErrorResponse).error )
  });
}

async PostMessage(msg:Message){
  await this.http.post("https://localhost:44327/api/Messages/SendMessage",msg).subscribe((data)=>{
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
}
