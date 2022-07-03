import { Group } from './../../../../Models/Group';
import { ActivatedRoute } from '@angular/router';
import { Course } from './../../../../Models/Course';
import { HttpService } from './../../../../Services/httpService/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  currentCourse=new Course()
  constructor(private httpService:HttpService,private route:ActivatedRoute) {
  }

   ngOnInit(): void {
    this.currentCourse.id=Number(this.route.snapshot.paramMap.get("id"))
     this.httpService.GetCourses(this.currentCourse.id).then(data=>{
      this.currentCourse=data as Course
    })

  }

}
