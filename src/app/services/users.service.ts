import { IUser } from './../auth/interfaces/api-reqres.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(base_url + 'users')
  }
}
