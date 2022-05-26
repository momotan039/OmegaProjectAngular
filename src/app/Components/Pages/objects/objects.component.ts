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


   saveCourse(){
     if(this.course.name=="")
     alert("נא להכניס את שם הקורס !!")
    //check if id is 0 so is its add new Course opearation
    if(this.course.id==0)
    this.httpService.PostCourse(this.course).then(d=>{
      alert("הפעולה פוצעה בהצלחה")
    });
    //else is its edit Course operation
  }
}
