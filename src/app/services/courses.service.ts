import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses.interface';

const base_url = environment.base_url_1;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient) {}


  getAll(): Observable<Course[]>{
    return this.http.get<Course[]>(base_url + '/courses');
  }

  getById(id: number): Observable<Course>{
    return this.http.get<Course>(base_url + '/courses/' + id);
  }

  create(course: Course): Observable<Course>{
    return this.http.post<Course>(base_url + '/courses', course);
  }

  update(id: number, course: Course): Observable<Course>{
    return this.http.put<Course>(base_url + '/courses/' + id, course);
  }

  delete(id: number, course: Course): Observable<Course>{
    return this.http.delete<Course>(base_url + '/courses/' + id);
  }



  //ejemplo devolviendo promesa.
  // getCourses(): Promise<Course[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (this.courses.length > 0) {
  //         resolve(this.courses);
  //       } else {
  //         reject();
  //       }
  //     }, 1000);
  //   });
  // }




}
