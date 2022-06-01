import { Course } from './../../../Models/Course';
import { HttpService } from './../../../Services/httpService/http.service';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups:Group[]=[]
  courses:Course[]=[]
  groupe=new Group()
  courseName=""
  constructor( private httpService:HttpService) { }

  ngOnInit(): void {
    this.groupe.name=""
    this.groupe.courseId=0
    //get groups
    this.httpService.GetGroups().then(data=>{
      this.groups=data as Group[]
    })
    //get courses name
    this.httpService.GetCourses(-1).then(data=>{
      this.courses=data as Course[]
    })
  }
  GetCourseNameById(id:number){
    return this.courses.find(f=>f.id==id)
  }

  deleteGroupe(id:number){

    let res=window.confirm("האם ברצונך להמשיך ?")
    if(!res)
      return;

    this.httpService.DeleteGroups(id).then(e=>{
    alert("הפעולה פוצעה בהצלחה")
    this.httpService.GetGroups().then(data=>{
      this.groups=data as Group[]
    });
    })
  }

  editBtn(g:Group){
      this.groupe=g;
      this.courseName=this.GetCourseNameById(g.courseId!)?.name!;
  }

    async saveGroupe(){

    //check if id is 0 so is its add new groupe opearation
    if(this.groupe.id==0){
      if(this.groupe.name=="")
     {
     alert("נא להכניס את שם הקורס !!")
      return
     }
     let temp;
     //check if this Course exits in database
     await this.httpService.GetGroups().then(d=>{
        temp=(d as Group[]).find(c=>c.name==this.groupe.name)
      })
      if(temp!=undefined)
      {
        alert("הקבוצה הזו כבר קיימת במערכת !!")
        return
      }
      this.httpService.PostGroups(this.groupe).then(d=>{
        alert("הפעולה פוצעה בהצלחה")
        this.httpService.GetGroups().then(data=>{
         this.groups=data as Group[]
       });
     });
    }

    //else is its edit Course operation
    else{
      let res=window.confirm("האם ברצונך להמשיך ?")
      if(!res)
      return;
      await this.httpService.EditingGroups(this.groupe).then(d=>{
        alert("הפעולה פוצעה בהצלחה")
        this.httpService.GetGroups().then(data=>{
           this.groups=data as Group[]
        });
      });
    }
    this.groupe.name=""
    this.groupe.courseId=0
  }
  // async GetCourseNameById(id:number):Promise<string>{
  //   let course=new Course();
  //   await this.HttpService.GetCourses(id).then(data => {
  //       course=data as Course;
  //   });
  //   return course.name!;
  // }
}
