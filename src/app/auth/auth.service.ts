import { Observable, of } from 'rxjs';
import { UserAuth } from './user-auth.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rolTypes: string[] = ['Alumno', 'Administrador']

  user: UserAuth | boolean = false;

  constructor() { }

  set setUser(user: UserAuth | boolean){
    this.user = user;
  }

  get getUser(){
    return this.user;
  }

  login(userAuth: UserAuth): Observable<UserAuth | boolean>{
    //chequeo que el rol exista
    if(this.checkRol(userAuth.rol)){
      this.setUser = userAuth;
    }else{

    }

    return of(this.getUser)
  }

  isLogin(){
    if(!this.user){
      return false
    }
    return true
  }

  logOut(){

  }

  getRoles(){
    return this.rolTypes;
  }

  checkRol(rol: string): Boolean{
    return this.rolTypes.includes(rol)
  }


}
