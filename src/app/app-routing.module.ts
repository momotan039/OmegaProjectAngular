import { ObjectsComponent } from './Components/Pages/objects/objects.component';
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

const routes: Routes = [
  {path:"",component:LogInComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"Group",component:GroupComponent},
  {path:"Teacher",component:TeacherComponent},
  {path:"Student",component:StudentComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Message",component:MessageComponent},
  {path:"Object",component:ObjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
