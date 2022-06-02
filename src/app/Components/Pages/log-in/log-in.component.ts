import { HttpService } from './../../../Services/httpService/http.service';
import { StudentService } from '../../../Services/Student/student.service';
import { UserService } from '../../../Services/User/Users.service';
import { User } from '../../../Models/User';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormsModule,
  FormGroupDirective,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})


export class LogInComponent implements OnInit {
  mail = '';
  passWord = '';
  users:User[]=[]
  constructor(
    private httpService:HttpService,
    private router:Router
  ){}

  async onSubmit(LogInForm: NgForm) {
    // if(this.userName=="")
    // alert("from submit empty")
    this.mail = LogInForm.value.userName;
    this.passWord = LogInForm.value.passWord;
    if (this.mail == '' || this.passWord == '') {
      alert('Please Enter all Fields');
      return;
    }
    let user=this.users.find(u=>u.email!=this.mail&&u.password==this.passWord);
    if(user==undefined)
    {
    alert("This user not found")
      return;
    }
    User.currentUser=user;
    this.router.navigate(['/Home'])
  }

  ngOnInit(): void {
    debugger
    if(User.currentUser!=undefined)
    {
      this.router.navigate(['/Home'])
      return
    }
     this.httpService.GetUsers().then( data=>{
      this.users=data as User[];
    })

  }

  CheckExistUser(userName:string,passWord:string):Boolean{
    let found=false
    UserService.AllUsers.forEach((user)=>{
       if(user.email===userName && user.password===passWord)
           {
            User.currentUser=user
             found=true;
             return
           }
     })

     return found
 }
}
