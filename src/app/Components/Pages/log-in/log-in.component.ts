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
  userName = '';
  passWord = '';
  constructor(
    private userService: UserService,
    private studentService:StudentService,
    private router:Router
  ){}

  onSubmit(LogInForm: NgForm) {
    // if(this.userName=="")
    // alert("from submit empty")
    this.userName = LogInForm.value.userName;
    this.passWord = LogInForm.value.passWord;
    if (this.userName == '' || this.passWord == '') {
      alert('Please Enter all Fields');
      return;
    }

    if (!this.userService.CheckExistUser(this.userName, this.passWord)) {
      alert('NotFound');
      return
    }
    //get from database student bu current user id
    const userId=this.userService.currentUser?.idCard
    this.studentService.currentStudent=this.studentService.Students.find(s=>s.UserId==userId)
    this.router.navigate(['/Home'])
  }

  ngOnInit(): void {}
}
