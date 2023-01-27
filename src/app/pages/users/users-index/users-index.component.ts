import { IUser } from './../../../auth/interfaces/api-reqres.interfaces';
import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  public users: IUser[] = [];

  public displayedColumns = ['id', 'name', 'email', 'avatar'];

  constructor(
    private readonly usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
    this.usersService.getUsers().subscribe({
      next: (resp: IUser[]) => {
        this.users = resp;
        // console.log(this.users)
      }
    });

  }

}
