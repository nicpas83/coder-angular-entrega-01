import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/interfaces/courses.interface';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course!: Course;

  constructor(
    public dialogRef: MatDialogRef<CreateCourseComponent>,
    
  ) { }

  ngOnInit(): void {
  }

}
