import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {


  studentForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  get nombre() { return this.studentForm.get('nombre') }
  get apellido() { return this.studentForm.get('apellido') }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
