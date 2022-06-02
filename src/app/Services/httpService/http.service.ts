import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { Group } from 'src/app/Models/Group';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {

  }

  async GetUsers(){
    return await this.http.get("https://localhost:44327/api/Users/GetUsers").toPromise();
  }

  async GetUsersByRole(role:number){
    return await this.http.get("https://localhost:44327/api/Users/GetUsersByRole/"+role).toPromise();
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
}