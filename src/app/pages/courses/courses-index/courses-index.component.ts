import { CreateCourseComponent } from './../create-course/create-course.component';
import { Component, OnDestroy, OnInit } from '@angular/core';

// MATERIAL
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

import { debounceTime, distinctUntilChanged, fromEvent, Subject } from 'rxjs';
import { Course } from 'src/app/interfaces/courses.interface';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.css'],
})
export class CoursesIndexComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'nombre'];
  dataSource = new MatTableDataSource<Course>();

  //observable para buscador de cursos
  search$ = new Subject<string>();
  searchText!: string;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCourses();

    //me subscribo al observable para realizar el filtrado del listado.
    this.search$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchText) => {
        this.dataSource.filter = searchText.trim().toLowerCase();
      });
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  getAllCourses() {
    this.coursesService.getAll().subscribe({
      next: (resp: Course[]) => {
        this.dataSource = new MatTableDataSource<Course>(
          resp.map((course: Course) => {
            return { ...course };
          })
        );
      },
      error: (err) => console.log(err),
    });
  }

  createCourse() {

      this.dialog.open(CreateCourseComponent, {
        data: {
          title: 'Agregar nuevo curso',
          course: undefined
        }
      })

  }

  editCourse(id: number){

  }


  deleteCourse(id: number) {}
}
