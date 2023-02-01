import { UsersService } from 'src/app/services/users.service';
import { IUser } from './../../../auth/interfaces/api-reqres.interfaces';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {


  // users$: Observable<IUser[]>;

  userForm: FormGroup = this.fb.nonNullable.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    telephone_number: ['', [Validators.required]],
    address: ['', [Validators.required]],
    rol: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

  }


  getUserData(){

  }

  handleForm(){

  }

}
