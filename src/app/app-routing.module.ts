import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/students/students.module').then( m => m.StudentsModule )
  },

  {
    path: 'cursos',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesModule )
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./pages/inscriptions/inscriptions.module').then( m => m.InscriptionsModule )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
