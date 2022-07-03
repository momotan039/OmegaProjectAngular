import { HomeWorkDetailsComponent } from './Components/Pages/Details/home-work-details/home-work-details.component';
import { CourseDetailsComponent } from './Components/Pages/Details/course-details/course-details.component';
import { HomeWorkComponent } from './Components/Pages/home-work/home-work.component';
import { GradeComponent } from './Components/Pages/grade/grade.component';
import { GroupDetailsComponent } from './Components/Pages/Details/group-details/group-details.component';
import { MyGroupsComponent } from './Components/Sub Components/my-groups/my-groups.component';
import { CourseComponent } from './Components/Sub Components/course/course.component';
import { MessageComponent } from './Components/Pages/message/message.component';
import { StudentComponent } from './Components/Pages/student/student.component';
import { TeacherComponent } from './Components/Pages/teacher/teacher.component';
import { GroupComponent } from './Components/Pages/group/group.component';
import { LogInComponent } from './Components/Pages/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { UserDetailsComponent } from './Components/Pages/Details/user-details/user-details.component';

const routes: Routes = [
  {path:"",component:LogInComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"Group",component:GroupComponent},
  {path:"MyGroup",component:MyGroupsComponent},
  {path:"Teacher",component:TeacherComponent},
  {path:"Student",component:StudentComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Message",component:MessageComponent},
  {path:"HomeWork",component:HomeWorkComponent},
  {path:"Grade",component:GradeComponent},
  {path:"Course",component:CourseComponent},
  {path:"UserDetails/:id",component:UserDetailsComponent},
  {path:"GroupDetails/:id",component:GroupDetailsComponent},
  {path:"CourseDetails/:id",component:CourseDetailsComponent},
  {path:"HomeWorkDetails/:id",component:HomeWorkDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
