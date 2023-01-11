import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
  public dataSource = new MatTableDataSource<Course>();

  //observable para buscador de cursos
  search$ = new Subject<string>();
  searchText!: string;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //obtengo los cursos mediante una promesa
    this.coursesService
      .getCourses()
      .then((response: Course[]) => {
        this.dataSource = new MatTableDataSource(response.map((course: Course) => {
          return { id: course.id, nombre: course.nombre.toUpperCase() };
        }));
      })
      .catch((error) => {
        console.log(error);
      });


      //me subscribo al observable para realizar el filtrado del listado.
      this.search$.pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(searchText => {
        this.dataSource.filter = searchText.trim().toLowerCase();
      })

  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  openDialogCourseForm(id?: number) {}

  deleteCourse(id: number) {}
}
