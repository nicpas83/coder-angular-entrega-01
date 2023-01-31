import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import {
  LogginForm,
  LogginSuccessful,
  UserDto,
} from './../interfaces/api-reqres.interfaces';
import { BehaviorSubject, map, mergeMap, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api_auth_url = environment.api_auth_url;
  rolTypes: string[] = ['Alumno', 'Administrador'];

  private user = new BehaviorSubject<User | null>(null);
  public user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  login(userLoggin: LogginForm): Observable<User> {
    //convierto obj porque viene con el campo rol desde el form.
    const { email, password } = userLoggin;
    const dataLoggin = { email, password };

    return this.http
      .post<LogginSuccessful>(this.api_auth_url + 'login', dataLoggin)
      .pipe(
        tap((data) => {
          localStorage.setItem('user', data.token);
        }),
        //traigo datos completos de un usuario random
        mergeMap(() => this.http.get<UserDto>(this.api_auth_url + 'users/5')),
        map(({ data }) => {
          const user = new User(
            data.id,
            data.email,
            data.first_name,
            data.last_name,
            data.avatar,
            userLoggin.rol
          );

          localStorage.setItem('user', JSON.stringify(user));

          return user;
        }),
        tap((user) => this.setUser(user))
      );
  }

  isLogin() {
    if (!localStorage.getItem('user')) {
      return false;
    }

    this.user.next(JSON.parse(localStorage.getItem('user')!));

    return true;
  }

  setUser(user: User) {
    //emito el nuevo valor del usuario.
    this.user.next(user);
  }

  logOut() {
    localStorage.removeItem('user');
    return true;
  }

  getRoles() {
    return this.rolTypes;
  }
}
