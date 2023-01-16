import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { StudentsIndexComponent } from './students-index/students-index.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: StudentsIndexComponent
  },
  {
    path: 'agregar',
    component: StudentFormComponent
  },
];

@NgModule({
  declarations: [
    StudentsIndexComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  exports: [
  RouterModule
  ]
})
export class StudentsModule { }
