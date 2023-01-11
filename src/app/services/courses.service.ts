import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    { id: 1, nombre: 'Html y Css' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'PHP y MySql' },
    { id: 4, nombre: 'Angular' },
  ];

  constructor() {}

  getCourses(): Promise<Course[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.courses.length > 0) {
          resolve(this.courses);
        } else {
          reject();
        }
      }, 1000);
    });
  }
}
