import { MessageComponent } from './Components/message/message.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { GroupComponent } from './Components/group/group.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"",component:LogInComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"Group",component:GroupComponent},
  {path:"Teacher",component:TeacherComponent},
  {path:"Student",component:StudentComponent},
  {path:"Message",component:MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
