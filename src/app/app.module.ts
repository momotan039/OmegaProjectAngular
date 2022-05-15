import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { GroupComponent } from './Components/group/group.component';
import { MessageComponent } from './Components/message/message.component';
import { HeaderWithoutMenuComponent } from './Components/header-without-menu/header-without-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { AddFormUserComponent } from './Components/add-form-user/add-form-user.component';
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
