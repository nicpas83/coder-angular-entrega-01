import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {


  studentForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    calificacion: [, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  //getters para facilitar la validación en la vistac
  get nombre() { return this.studentForm.get('nombre') }
  get apellido() { return this.studentForm.get('apellido') }
  get calificacion() { return this.studentForm.get('calificacion') }

  ngOnInit(): void {

    //si existe studentData, actualizo valores del formulario.
    if(this.data.student){
      this.studentForm.patchValue(this.data.student)
    }
    console.log(this.data)
  }

  onSubmit(){
     if(this.studentForm.invalid){
      return
     }
     // mando los datos al componente principal
     this.dialogRef.close(this.studentForm.value)
  }

}
