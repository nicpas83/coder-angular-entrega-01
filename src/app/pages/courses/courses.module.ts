import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesIndexComponent } from './courses-index/courses-index.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CoursesIndexComponent
  }
];


@NgModule({
  declarations: [
    CoursesIndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
