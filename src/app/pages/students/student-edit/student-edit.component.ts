import { InscriptionsService } from './../../../services/inscriptions.service';
import { Observable } from 'rxjs';
import { CourseSelectDialogComponent } from './../course-select-dialog/course-select-dialog.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { StudentInscription } from './../../../interfaces/student.interface';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from 'src/app/services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student.interface';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/courses.interface';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: [
  ]
})
export class StudentEditComponent implements OnInit {

  student_id: number = 0;

  //formulario principal
  studentForm = this.fb.group({
   first_name: ['', Validators.required],
   last_name: ['', Validators.required],
   document_number: [0, Validators.required],
  });

  get first_name() { return this.studentForm.get('first_name') }
  get last_name() { return this.studentForm.get('last_name') }
  get document_number() { return this.studentForm.get('document_number') }


  //inscripciones
  public displayedColumns: string[] = ['course', 'created_at', 'actions'];
  public dataSource = new MatTableDataSource<StudentInscription>();
  public courses: Course[] = [];


  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private inscriptionsService: InscriptionsService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //tomo el id de los params y cargo el formulario
    this.route.paramMap.subscribe( params => {
      this.student_id = Number(params.get('id'));
      this.getStudent();
    });

    this.coursesService.getAll().subscribe( courses => {
      this.courses = courses;
    })

    this.getInscriptionsByStudentId();

  }


  getStudent(){
    this.studentsService.getById(this.student_id).subscribe((data: Student) => {
      this.studentForm.patchValue(data)
    });
  }

  getInscriptionsByStudentId(){
    this.inscriptionsService.getInscriptionsByStudentId(this.student_id).subscribe(inscriptions => {
      this.dataSource = new MatTableDataSource(inscriptions);
      this.dataSource._updateChangeSubscription();
    });
  }

  openModalInscriptionCourse(){
    const dialogRef = this.dialog.open(CourseSelectDialogComponent, {
      data: {courses: this.courses}
    })

    dialogRef.afterClosed().subscribe(course => {
      if(course){
        this.inscriptionsService.addInscription(course.id, this.student_id).subscribe(() => this.getInscriptionsByStudentId())
      }
    });
  }



  updateStudent(){

    //validar formularios
    if(this.studentForm.invalid){
      return
    }

    console.log(this.studentForm.value)
    //actualizar los datos personales

    //actualizar las inscripciones

  }


  getStudentInscriptions(){

  }



  deleteStudentInscription(id: number){
    this.inscriptionsService.delete(id).subscribe({
      next: () => this.getInscriptionsByStudentId(),
      error: (err) => console.log(err)
    });
  }

}
