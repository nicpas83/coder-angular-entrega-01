import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesIndexComponent } from './pages/courses/courses-index/courses-index.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionsIndexComponent } from './pages/inscriptions/inscriptions-index/inscriptions-index.component';
import { StudentFormComponent } from './pages/students/student-form/student-form.component';
import { StudentsIndexComponent } from './pages/students/students-index/students-index.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'alumnos',
    component: StudentsIndexComponent,
  },
  {
    path: 'alumnos/agregar',
    component: StudentFormComponent
  },
  {
    path: 'cursos',
    component: CoursesIndexComponent
  },
  {
    path: 'inscripciones',
    component: InscriptionsIndexComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
