import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>('assets/database-json/students.json')
  }

  getById(){

  }

  create(student: any): void{


  }

  update(){

  }

  delete(){

    
  }


  getMaxId(items: Student[]): number{
    return Math.max(...items.map( item => item.id ))
  }


}
