import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
