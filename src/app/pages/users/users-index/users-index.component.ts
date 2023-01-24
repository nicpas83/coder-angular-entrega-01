import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  public users: User[] = [];

  public displayedColumns = ['id', 'name', 'email', 'avatar'];

  constructor(
    private readonly usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
    this.usersService.getUsers().subscribe({
      next: (resp: User[]) => {
        this.users = resp;
        console.log(this.users)
      }
    });

  }

}
