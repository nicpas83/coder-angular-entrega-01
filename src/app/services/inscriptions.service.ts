import { Course } from 'src/app/interfaces/courses.interface';
import {
  StudentInscription,
  Inscriptions,
} from './../interfaces/student.interface';
import { filter, forkJoin, map, Observable, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url_1 = environment.base_url_1;
const base_url_2 = environment.base_url_2;

@Injectable({
  providedIn: 'root',
})
export class InscriptionsService {
  constructor(private http: HttpClient) {}

  // Obtengo todas las inscripciones y filtro las del estudiante.
  getInscriptionsByStudentId(
    student_id: number
  ): Observable<StudentInscription[]> {
    return forkJoin([
      this.http.get<StudentInscription[]>(base_url_2 + '/inscriptions'),
      this.http.get<Course[]>(base_url_1 + '/courses'),
    ]).pipe(
      map(([inscriptions, courses]) => {
        return inscriptions
          .filter((inscription) => inscription.student_id === student_id)
          .map((inscription) => {
            const course = courses.find((c) => c.id === inscription.course_id);
            return { ...inscription, course: course?.name };
          });
      })
    );
  }

  getInscriptionsByCourseId(
    course_id: number
  ): Observable<StudentInscription[]> {
    return this.http
      .get<StudentInscription[]>(base_url_2 + '/inscriptions')
      .pipe(
        map((inscriptions) =>
          inscriptions.filter(
            (inscription) => inscription.course_id === course_id
          )
        )
      );
  }

  addInscription(course_id: number, student_id: number): Observable<any> {
    return this.http.post(base_url_2 + '/inscriptions', {
      course_id,
      student_id,
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(base_url_2 + '/inscriptions/' + id);
  }
}
