import { HttpService } from './../../../Services/httpService/http.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/Course';
@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css','../../../Styles/table.css']
})
export class ObjectsComponent implements OnInit {

  course=new Course()
  courses:Array<Course>=[]
  constructor(private httpService:HttpService) {
  }

  ngOnInit(): void {
    this.course.id=0;
    this.course.name=""

    this.httpService.GetCourses().then(data=>{
      this.courses=data as Course[]
    });
  }

  deleteCourse(id:number){

    let res=window.confirm("האם ברצונך להמשיך ?")
    if(!res)
      return;

    this.httpService.DeleteCourse(id).then(e=>{
    alert("הפעולה פוצעה בהצלחה")
    this.httpService.GetCourses().then(data=>{
      this.courses=data as Course[]
      console.log(this.courses)
    });
    })
  }
  editBtn(c:Course){
      this.course=c;
  }
    async saveCourse(){

    //check if id is 0 so is its add new Course opearation
    if(this.course.id==0){
      if(this.course.name=="")
     {
     alert("נא להכניס את שם הקורס !!")
      return
     }
     let temp;
     //check if this Course exits in database
     await this.httpService.GetCourses().then(d=>{
        temp=(d as Course[]).find(c=>c.name==this.course.name)
      })
      if(temp!=undefined)
      {
        alert("הקורס הזה כבר קיים במערכת !!")
        return
      }
      this.httpService.PostCourse(this.course).then(d=>{
        alert("הפעולה פוצעה בהצלחה")
        this.httpService.GetCourses().then(data=>{
         this.courses=data as Course[]
       });
     });
    }

    //else is its edit Course operation
    else{
      let res=window.confirm("האם ברצונך להמשיך ?")
      if(!res)
      return;
      await this.httpService.EditingCourse(this.course).then(d=>{
        this.httpService.GetCourses().then(data=>{
           this.courses=data as Course[]
        });
        console.warn(this.courses);
      });
    }
    this.course.name=""
  }
}
