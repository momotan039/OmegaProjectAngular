import { Injectable } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

constructor() { }
grades?:Array<Grade>=[
  {GradID:1,Grade:800,
    GroupID:152,Note:"חמור",
    UserID:"51981891"},
  {GradID:1,Grade:700,
    GroupID:152,Note:"חמור2",
    UserID:"261951981"},
  {GradID:1,Grade:600,
    GroupID:152,Note:"חמור3",
    UserID:"198984556"},
]
}
