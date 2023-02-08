import { CoursesService } from 'src/app/services/courses.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CourseActions from './course.actions';


@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CourseActions.loadCourses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.coursesService.getAll().pipe(
          map(data => CourseActions.loadCoursesSuccess({ data })),
          catchError(error => of(CourseActions.loadCoursesFailure({ error }))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
    ) {}
}
