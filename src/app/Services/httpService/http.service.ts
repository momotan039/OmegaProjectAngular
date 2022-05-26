import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/Course';
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

async GetCourses(){
  return await this.http.get("https://localhost:44327/api/Courses/GetCourses").toPromise();
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
}
