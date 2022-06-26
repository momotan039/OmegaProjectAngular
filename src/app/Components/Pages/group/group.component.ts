import { Course } from './../../../Models/Course';
import { HttpService } from './../../../Services/httpService/http.service';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/Group';
import { MyTools } from 'src/app/Services/MyTools/MyTools';

@Component({
selector: 'app-group',
templateUrl: './group.component.html',
styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
groups: Group[] = [];
courses: Course[] = [];
group = new Group();
coruse = new Course();
ccdate=new Date()
constructor(private httpService: HttpService) {}

getCorrectSyntaxDate(){
  let dvar=new Date().toDateString()
  let temp="";
  for (let index = dvar.length; index >=0; index--) {
    temp+=dvar[index]
  }
  alert(temp)
  return temp
}
ngOnInit(): void {

this.group.name = '';
this.group.id = 0;
this.group.courseId = 0;

this.coruse.id = 0;
this.coruse.name = '';
//get groups
this.httpService.GetGroups().then((data) => {
this.groups = data as Group[];
});
//get courses name
this.httpService.GetCourses(-1).then((data) => {
this.courses = data as Course[];
});
}
GetCourseNameById(id: number) {
return this.courses.find((f) => f.id == id);
}

deleteGroupe(id: number) {
let res = window.confirm('האם ברצונך להמשיך ?');
if (!res) return;

this.httpService.DeleteGroups(id).then((e) => {
alert('הפעולה פוצעה בהצלחה');
this.httpService.GetGroups().then((data) => {
this.groups = data as Group[];
});
});
}

editBtn(g: Group) {
this.group = g;
this.coruse.name = this.GetCourseNameById(g.courseId!)?.name!;
}

async saveGroupe() {
  if(this.group.openingDate==undefined)
  {
    alert('נא להכניס את תאריך פתיחת הקבוצה !!');
    return;
  }
  if(this.group.closingDate==undefined)
  {
    alert('נא להכניס את תאריך סיום הקבוצה !!');
    return;
  }
if (this.group.name == '') {
alert('נא להכניס את שם הקבוצה !!');
return;
}
if (this.coruse.id == 0) {
alert('נא לבחור את הקורס');
return;
}


//check if id is 0 so is its add new group opearation
if (this.group.id == 0) {
this.group.courseId = this.coruse.id;
let temp;
//check if this Group exits in database
await this.httpService.GetGroups().then((d) => {
temp = (d as Group[]).find((c) => c.name == this.group.name||c.id==this.group.id);
});
if (temp != undefined) {
alert('הקבוצה הזו כבר קיימת במערכת !!');
return;
}
debugger
this.httpService.PostGroups(this.group).then((d) => {
alert('הפעולה פוצעה בהצלחה');
this.httpService.GetGroups().then((data) => {
this.groups = data as Group[];
});
});
}
//else is its edit Group operation
else {
let res = window.confirm('האם ברצונך להמשיך ?');
if (!res) return;
debugger
//reset course Id
this.group.courseId=this.coruse.id
await this.httpService.EditingGroups(this.group).then((d) => {
alert('הפעולה פוצעה בהצלחה');
this.httpService.GetGroups().then((data) => {
this.groups = data as Group[];
});
});
}

this.group.name = '';
this.group.courseId = 0;
}

ChangeOptionSelect(elem: any) {
let idCourse = elem.value;
if (isNaN(idCourse)) {
this.coruse.name = '';
return;
}
this.coruse.id = Number(idCourse);
}

ChangeDatePicker(elm:any,num:number){
  if(num==0)
 this.group.openingDate=elm.value
 else
 this.group.closingDate=elm.value
}

CustomDate(date:Date){
  return  MyTools.CustomDate(date)
}
StringDate(date:Date){
  return date.toLocaleDateString();
}
}
