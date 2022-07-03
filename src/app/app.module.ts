import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/Pages/log-in/log-in.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentComponent } from './Components/Pages/student/student.component';
import { TeacherComponent } from './Components/Pages/teacher/teacher.component';
import { GroupComponent } from './Components/Pages/group/group.component';
import { MessageComponent } from './Components/Pages/message/message.component';
import { HeaderWithoutMenuComponent } from './Components/Layout/header-without-menu/header-without-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './Components/Sub Components/users-list/users-list.component';
import { AddFormUserComponent } from './Components/Sub Components/add-form-user/add-form-user.component';
import { UserControlComponent } from './Components/Sub Components/user-control/user-control.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { MyAppComponent } from './Components/Layout/my-app/my-app.component';
import { CourseComponent } from './Components/Sub Components/course/course.component';
import { MyGroupsComponent } from './Components/Sub Components/my-groups/my-groups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupDetailsComponent } from './Components/Pages/Details/group-details/group-details.component';
import { UserDetailsComponent } from './Components/Pages/Details/user-details/user-details.component';
import { GradeComponent } from './Components/Pages/grade/grade.component';
import { HomeWorkComponent } from './Components/Pages/home-work/home-work.component';
import { CourseDetailsComponent } from './Components/Pages/Details/course-details/course-details.component';
import { HomeWorkDetailsComponent } from './Components/Pages/Details/home-work-details/home-work-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    GroupComponent,
    MessageComponent,
    HeaderWithoutMenuComponent,
    UsersListComponent,
    AddFormUserComponent,
    UserControlComponent,
    AdminComponent,
    MyAppComponent,
    CourseComponent,
    MyGroupsComponent,
    GroupDetailsComponent,
    UserDetailsComponent,
    GradeComponent,
    HomeWorkComponent,
    CourseDetailsComponent,
    HomeWorkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
