import { Component, OnInit, ViewChild } from '@angular/core';

import { Student } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students-index.component.html',
  styleUrls: ['./students-index.component.scss']
})
export class StudentsIndexComponent implements OnInit {

  // @ViewChild(MatTable) studentsTable!: MatTable<any>;

  public students: Student[] = [];
  public displayedColumns: string[] = ['id','nombre', 'apellido', 'calificacion', 'estado', 'acciones'];
  public dataSource = new MatTableDataSource<Student>();

  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    // Obtengo listado de alumnos
    this.studentsService.getAll().subscribe({
      next: (resp) => {
        this.dataSource = new MatTableDataSource<Student>(resp);
        console.log(this.dataSource.data)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  // DIALOG PARA CREAR O EDITAR REGISTRO
  openDialogStudentForm(id?: number) {
    const dialogTitle = id ? 'Editar Alumno' : 'Agregar Alumno';
    let studentEditData: Student | undefined;

    if(id){
      studentEditData = this.dataSource.filteredData.find( item => item.id === id )
    }

    // abro el dialog
    const dialogRef = this.dialog.open(StudentFormComponent, {
      data: {
        title: dialogTitle,
        student: studentEditData
      }
    })

    // luego de cerrar actualizo informacion en la tabla
    dialogRef.afterClosed().subscribe( data => {

      if(data){
        if(id){
          //editar
          data.id = id;
          const index = this.dataSource.filteredData.findIndex( item => item.id === id);

          if(index !== -1){
            this.dataSource.filteredData.splice(index, 1, data);
            this.dataSource._updateChangeSubscription();
          }

        }else{
          //crear
          data.id = this.studentsService.getMaxId(this.dataSource.data) + 1;
          const newStudent: Student = data;

          //actualizar el datasource
          this.dataSource.data.push(newStudent);
          this.dataSource._updateChangeSubscription();
        }
      }
    });

  }


  deleteStudent(id: number){
    const index = this.dataSource.filteredData.findIndex( item => item.id === id )

    console.log(id)
    console.log(index)
    if(index !== -1){
      this.dataSource.filteredData.splice(index, 1)
      this.dataSource._updateChangeSubscription();

    }
  }




}
