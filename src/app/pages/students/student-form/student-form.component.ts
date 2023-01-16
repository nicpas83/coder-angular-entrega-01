import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/interfaces/courses.interface';
import { CoursesService } from 'src/app/services/courses.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  //formulario para crear / editar alumno
  studentForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
  });

  //select para inscribir alumno (solo al editar)
  courses: Course[] = [];
  inscriptionCourseId!: number;

  //inscripciones del alumno
  inscriptions: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  //getters para facilitar la validación en la vistac
  get nombre() { return this.studentForm.get('nombre') }
  get apellido() { return this.studentForm.get('apellido') }
  get calificacion() { return this.studentForm.get('calificacion') }

  ngOnInit(): void {
    //si es edit, actualizo valores del formulario.
    if(this.data.student){
      this.studentForm.patchValue(this.data.student);
      this.coursesService.getCourses().then( resp => { this.courses = resp })
    }
  }

  save(){
     if(this.studentForm.invalid){
      return
     }
     // mando los datos al componente principal
     this.dialogRef.close(this.studentForm.value)
  }

  addInscription(){
    if(this.inscriptionCourseId){
      let course = this.courses.filter( value => value.id == this.inscriptionCourseId)
      this.inscriptions.push(course[0])
      this.inscriptionCourseId = 0;
    }
  }

}
